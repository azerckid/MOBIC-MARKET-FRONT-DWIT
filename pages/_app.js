import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { SessionProvider } from "next-auth/react";

const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: border-box;
    font-family: "Pretendard Variable", Pretendard;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #eee;
    font-family: "Pretendard Variable", Pretendard;
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </CartContextProvider>
    </>
  );
}
