import styled from "styled-components";
import Center from "./Center";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";

const Bg = styled.div`
  background-color: #333;
  padding: 2rem;
  color: #fff;
`;

const ColumnWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  img {
    max-width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    padding: 2rem;
    grid-template-columns: 0.8fr 1.2fr;
    div:nth-child(1) {
      order: 0;
    }
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-family: "Pretendard Variable", Pretendard;
  margin: 0.5rem 0;
  font-weight: 200;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 3rem;
  }
`;
const Description = styled.p`
  font-family: "Pretendard Variable", Pretendard;
  font-size: 1.1rem;
  font-weight: 200;
  line-height: 1.5rem;
  color: #aaa;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 3rem;
`;
const ButtonNew = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  /* ${(props) => props.block && "width: 100%;"} */
  svg {
    height: 1.2rem;
    margin-right: 0.5rem;
  }
  cursor: pointer;
  background-color: gray;
  &:hover {
    background-color: #4431d6;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      &:hover {
        background-color: #d63131;
      }
    `}
`;
const ButtonLinkNew = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  /* ${(props) => props.block && "width: 100%;"} */
  svg {
    height: 1.2rem;
    margin-right: 0.5rem;
  }
  cursor: pointer;
  background-color: gray;
  &:hover {
    background-color: #4431d6;
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: #5542f6;
      &:hover {
        background-color: #d63131;
      }
    `}
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  const addFeaturedToCart = () => {
    addProduct(product._id);
  };
  return (
    <Bg>
      <Center>
        <ColumnWraper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Description>{product.description.slice(0, 100)}...</Description>
              <BtnBox>
                <ButtonLinkNew href={`/products/` + product._id}>
                  READ MORE
                </ButtonLinkNew>
                <ButtonNew onClick={addFeaturedToCart}>
                  <CartIcon></CartIcon>
                  ADD TO CART
                </ButtonNew>
              </BtnBox>
            </div>
          </Column>
          <Column>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1701100893632.png"
              alt="featured"
            />
          </Column>
        </ColumnWraper>
      </Center>
    </Bg>
  );
}
