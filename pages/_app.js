import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #eee;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
