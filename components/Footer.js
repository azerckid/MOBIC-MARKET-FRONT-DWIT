import styled from "styled-components";
import Center from "./Center";

const StyledFooter = styled.header`
  margin-top: 5rem;
  background-color: #333;
  @media screen and (min-width: 768px) {
  }
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
const FooterWrapper = styled.div`
  width: 100%;
  height: 20rem;
  color: whitesmoke;
  background-color: #333;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Center>
        <Wraper>
          <FooterWrapper>Footer</FooterWrapper>
        </Wraper>
      </Center>
    </StyledFooter>
  );
}
