import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  background-color: #fff;
  border-radius: 10px;
  img {
    max-width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const Title = styled(Link)`
  margin-bottom: 4px;
  font-family: "Pretendard Variable", Pretendard;
  font-weight: 300;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
`;
const ProductInfoBox = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;
const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
`;
const PriceUnit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  div:first-child {
    margin-right: 0.2rem;
  }
`;
const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
`;
const CartButton = styled.button`
  padding-right: 1.2rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: dodgerblue;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  font-family: "Pretendard Variable", Pretendard;
  cursor: pointer;
  border: none;
  svg {
    height: 1rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fff;
    background-color: hotpink;
  }
`;
export default function ProductBox({ _id, title, description, price, images }) {
  const uri = "/products/" + _id;
  const { addProduct } = useContext(CartContext);
  const addProductToCart = (_id) => {
    addProduct(_id);
  };
  return (
    <ProductWrapper>
      <WhiteBox href={uri}>
        <img src={images[0]} alt={title} />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={uri}>{title}</Title>
        <PriceRow>
          <PriceUnit>
            <div>₩</div>
            <Price>{price.toLocaleString("ko-KR")}</Price>
          </PriceUnit>
          <CartButton onClick={() => addProductToCart(_id)}>
            <CartIcon></CartIcon>
            Add to cart
          </CartButton>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
