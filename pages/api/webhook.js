import { mongooseConnect } from "@/lib/mongoose";
import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret =
  "whsec_5cc89a4195fbdca827a5e79e7b84144ad40849752e563f03669d7ac52c772242";

export default async function handler(req, res) {
  await mongooseConnect();
  res.json({ message: "Hello World" });

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecret
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      console.log(paymentIntentSucceeded);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
//   const session = await stripe.checkout.sessions.create({
//     line_items,
//     mode: "payment",
//     success_url: `${req.headers.origin}/success`,
//     cancel_url: `${req.headers.origin}/cart`,
//   });
