import styled from "styled-components";

const StyledInput = styled.input`
  margin-bottom: 0.3rem;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #eaeaea;
  width: 100%;
  font-size: 0.8rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #5542f6;
  }
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
