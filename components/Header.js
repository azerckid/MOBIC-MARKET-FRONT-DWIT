import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useSession, signIn, signOut } from "next-auth/react";
import BarsIcon from "./icons/Bars";
import Router from "next/router";
import Auth from "@/components/auth";

const StyledHeader = styled.header`
  background-color: #222;
  @media screen and (min-width: 768px) {
  }
`;
const Logo = styled(Link)`
  font-family: "Pretendard Variable", Pretendard;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 0 1rem;
  position: relative;
  z-index: 1;
`;
const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
const StyledNav = styled.nav`
  ${(props) => (props.mobile ? "display: block" : "display: none")};
  align-items: center;
  gap: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6rem 2rem 2rem;
  background-color: #222;
  @media (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const StyledLink = styled(Link)`
  padding: 1rem 0;
  display: block;
  color: #aaa;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;
const NavButton = styled.button`
  width: 2rem;
  height: 2rem;
  color: whitesmoke;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const LoginButton = styled.button`
  font-size: 1rem;
  font-weight: 400;
  color: #aaa;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #fff;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const { data: session } = useSession();
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function signInButton() {
    setIsLogin(true);
  }
  function signOutButton() {
    setIsLogin(false);
    signOut();
  }

  return (
    <StyledHeader>
      <Center>
        <Wraper>
          <Logo href="/">MobicMarket</Logo>
          <StyledNav mobile={mobileNavActive}>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/products">All Products</StyledLink>
            {/* <StyledLink href="/account">Account</StyledLink> */}
            <StyledLink href="/cart">Cart ({cartProducts.length})</StyledLink>
            {/* {session ? (
              <StyledLink
                href="/auth"
                onClick={() => {
                  signOut();
                }}
              >
                SignOut
              </StyledLink>
            ) : (
              <StyledLink href="/auth">Sign in</StyledLink>
            )} */}
            {session ? (
              <LoginButton onClick={signOutButton}>sign Out</LoginButton>
            ) : (
              <LoginButton onClick={signInButton}>sign In</LoginButton>
            )}
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wraper>
        {isLogin ? <Auth /> : null}
      </Center>
    </StyledHeader>
  );
}
