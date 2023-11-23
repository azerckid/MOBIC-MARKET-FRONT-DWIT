// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/product";

// export default async function Check(req, res) {
//   await mongooseConnect();
//   const { imp_uid } = req.body;
//   const {
//     data: { response },
//   } = await axios({
//     url: "https://api.iamport.kr/payments/" + imp_uid,
//     method: "get",
//     headers: { "Content-Type": "application/json" },
//     params: {
//       imp_uid: imp_uid,
//     },
//     data: {
//       imp_uid: imp_uid,
//     },
//     dataType: "json",
//   });
//   const product = await Product.findOne({ _id: response.merchant_uid });
//   if (product.price === response.amount) {
//     res.json({ status: true });
//   } else {
//     res.json({ status: false });
//   }
// }
