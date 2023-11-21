import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handler(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  const products = await Product.find({ _id: ids });
  res.json(products);
}
