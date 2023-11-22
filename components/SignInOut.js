import { useSession, signIn, signOut } from "next-auth/react";
import { Router } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
  }
`;
const Button = styled.button`
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.4rem;
  padding-bottom: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.color ? props.color : "gray")};
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hotpink;
  }
`;

export default function SignInOut() {
  const { data: session } = useSession();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (session && isLogin) {
      Router.push("/");
    }
  }, [session, isLogin]);

  return (
    <>
      {!session && (
        <ButtonWraper>
          <Button
            color="gray"
            onClick={() => {
              setIsLogin(true);
              signIn("google");
            }}
          >
            google
          </Button>
          <Button
            color="yellow"
            onClick={() => {
              setIsLogin(true);
              signIn("kakao");
            }}
          >
            kakao
          </Button>
          <Button
            color="green"
            onClick={() => {
              setIsLogin(true);
              signIn("naver");
            }}
          >
            Naver
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
