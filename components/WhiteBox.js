import styled from "styled-components";

const StyledWhiteBox = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export default function WhiteBox({ children }) {
  return <StyledWhiteBox>{children}</StyledWhiteBox>;
}
