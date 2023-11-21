import styled from "styled-components";
import Center from "./Center";
import ProductGrid from "@/components/ProductGrid";

const Title = styled.div`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default function NewProducts({ newProducts }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductGrid products={newProducts}></ProductGrid>
    </Center>
  );
}
