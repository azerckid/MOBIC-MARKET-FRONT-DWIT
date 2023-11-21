import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default function Home({ featuredProduct, newProduct }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts newProducts={newProduct} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = "655632ef22f1cf0639b2ef00";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProduct = await Product.find().sort({ _id: -1 }).limit(10);
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProduct: JSON.parse(JSON.stringify(newProduct)),
    },
  };
}
