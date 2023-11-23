import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 768px) {
  }
`;
const Button = styled.button`
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : "white")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "gray")};
  border-radius: 4px;
  border: none;
  /* box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2); */
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hotpink;
  }
`;

export default function SignInOut() {
  const { data: session } = useSession();
  const [isLogin, setIsLogin] = useState(false);

  const Title = styled.div`
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  `;

  //   useEffect(() => {
  //     if (session && isLogin) {
  //       Router.push("/");
  //     }
  //   }, [session, isLogin]);

  return (
    <>
      {!session && (
        <ButtonWraper>
          <Title>로그인</Title>
          <Button
            bgcolor="#4285F4"
            onClick={() => {
              setIsLogin(true);
              signIn("google");
            }}
          >
            google 로그인
          </Button>
          <Button
            color="#000000"
            bgcolor="#FEE500"
            onClick={() => {
              setIsLogin(true);
              signIn("kakao");
            }}
          >
            kakao 로그인
          </Button>
          <Button
            bgcolor="#3EAF0E"
            onClick={() => {
              setIsLogin(true);
              signIn("naver");
            }}
          >
            Naver 로그인
          </Button>
        </ButtonWraper>
      )}
      {/* {session && (
        <>
          <img
            src={session.user.image}
            alt={session.user.name}
            width="30"
            height="30"
          />
          <span>{session.user.name}</span>
          <button
            onClick={() => {
              setIsLogin(false);
              signOut();
            }}
          >
            Sign out
          </button>
        </>
      )} */}
    </>
  );
}
