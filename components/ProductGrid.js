import styled from "styled-components";
import ProductBox from "./ProductBox";

const StyleProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
  padding-top: 0rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function ProductGrid({ products }) {
  return (
    <StyleProductGrid>
      {products.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyleProductGrid>
  );
}
