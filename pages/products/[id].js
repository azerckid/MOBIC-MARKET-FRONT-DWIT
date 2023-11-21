import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import CartIcon from "@/components/icons/CartIcon";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;
  @media screen and (mix-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;
const ProductInfoWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
const DescripttionBox = styled.div`
  line-height: 1.5rem;
`;
const PriceBox = styled.div`
  margin-top: 3rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: normal;
`;
const PriceTage = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: gray;
`;
const CartButton = styled(Button)`
  padding-right: 0.7rem;
  padding-left: 0.5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: dodgerblue;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hotpink;
  }
`;
export default function ProductDetail({ product }) {
  const [productDetail, setProductDetail] = useState({});

  const router = useRouter();
  const { id } = router.query;

  const { addProduct } = useContext(CartContext);
  const addProductToCart = (id) => {
    addProduct(id);
  };

  useEffect(() => {
    if (id) {
      setProductDetail(product);
    }
  }, [id]);

  return (
    <>
      <Header />
      <Center>
        <Title>Product Detail</Title>
        <ColumnWrapper>
          <WhiteBox>
            <ProductImages images={productDetail?.images} />
          </WhiteBox>
          <ProductInfoWraper>
            <div>
              <Title>{productDetail?.title}</Title>
              <DescripttionBox>{productDetail?.description}</DescripttionBox>
            </div>
            <PriceBox>
              <PriceTage>price : ₩{productDetail?.price}</PriceTage>
              <CartButton onClick={() => addProductToCart(product._id)}>
                <CartIcon></CartIcon>
                Add to cart
              </CartButton>
            </PriceBox>
          </ProductInfoWraper>
        </ColumnWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
