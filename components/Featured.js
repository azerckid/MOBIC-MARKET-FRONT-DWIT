import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background-color: #333;
  padding: 2rem;
  color: #fff;
`;
const Title = styled.h1`
  margin: 0.5rem 0;
  font-weight: 200;
  font-size: 2rem;
  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 3rem;
  }
`;
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #aaa;
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
    /* margin: 0 auto; */
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
const BtnBox = styled.div`
  display: flex;
  gap: 0.2rem;
  margin-top: 3rem;
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
              <Description>{product.description.slice(0, 100)}</Description>
              <BtnBox>
                <ButtonLink href={`/products/` + product._id}>
                  READ MORE
                </ButtonLink>
                <Button onClick={addFeaturedToCart}>
                  <CartIcon></CartIcon>
                  ADD TO CART
                </Button>
              </BtnBox>
            </div>
          </Column>
          <Column>
            <img
              src="https://mobic-market.s3.ap-northeast-2.amazonaws.com/1700214041078.png"
              alt="featured"
            />
          </Column>
        </ColumnWraper>
      </Center>
    </Bg>
  );
}
