import Center from "@/components/Center";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import styled from "styled-components";

const Title = styled.div`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default function Products({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>Products</Title>
        <ProductGrid products={products}></ProductGrid>
      </Center>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}).sort({ _id: -1 });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
