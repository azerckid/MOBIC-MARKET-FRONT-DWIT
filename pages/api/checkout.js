import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/order";
import { Product } from "@/models/product";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
  }
  const {
    name,
    email,
    city,
    postalCode,
    streetAddress,
    apartment,
    country,
    products,
  } = req.body;

  await mongooseConnect();
  const productIds = products.split(",");
  const uniqueIds = [...new Set(productIds)];
  const productsInfos = await Product.find({ _id: uniqueIds });

  let line_items = [];
  for (const productId of uniqueIds) {
    const productInfo = productsInfos.find(
      (product) => product._id.toString() === productId
    );
    const quantity = productIds.filter((id) => id === productId)?.length || 0;
    if (quantity > 0) {
      line_items.push({
        quantity,
        price_data: {
          currency: "krw",
          product_data: {
            name: productInfo.title,
            // images: productInfo.images[0],
          },
          unit_amount: productInfo.price,
        },
        quantity,
      });
    }
  }
  const orderDoc = Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    apartment,
    country,
    products,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/cart?success=1",
    cancel_url: process.env.PUBLIC_URL + "/cart?cancel=1",
    metadata: {
      //   orderId: orderDoc._id.toString(),
    },
  });

  res.status(200).json({ url: session.url });
}
