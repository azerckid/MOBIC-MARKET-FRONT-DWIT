import styled from "styled-components";
import css from "styled-jsx/css";

export const ButtonStyle = css`
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

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
