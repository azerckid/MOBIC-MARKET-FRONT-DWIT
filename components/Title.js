import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 2rem;
  font-weight: normal;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export default function Title({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
