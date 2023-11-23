import Center from "@/components/Center";
import SignInOut from "@/components/SignInOut";
import styled from "styled-components";

const SocialLoginWrapper = styled.div`
  width: 90%;
  height: 50%;
  position: fixed;
  top: 10%;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 400px;
    top: 20%;
    left: 30%;
  }
`;

export default function Auth() {
  return (
    <>
      <Center>
        <SocialLoginWrapper>
          <SignInOut />
        </SocialLoginWrapper>
      </Center>
    </>
  );
}
