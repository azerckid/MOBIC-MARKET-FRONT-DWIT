import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.3fr 0.7fr;
  }
`;

const Box = styled.div`
  padding: 2rem 0.3rem;
  background-color: #fff;
  border-radius: 0.5rem;
`;

const ProductInfoCell = styled.td`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  font-size: 0.8rem;
`;
const ProductImageBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  img {
    max-width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
  }
`;
const QuantityLabel = styled.span`
  display: block;
  padding: 0.5rem;
  font-size: 0.8rem;
  font-weight: normal;
  margin-left: 0.4rem;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
const TdPrice = styled.td`
  @media screen and (min-width: 768px) {
  }
`;
const TotalTr = styled.tr`
  td {
    font-weight: bold;
    color: gray;
    /* background-color: yellow; */
  }
`;
const CityHolder = styled.div`
  display: flex;
  gap: 0.2rem;
`;
const AddMinusButton = styled(Button)`
  background-color: lightgray;
  &:hover {
    color: black;
    background-color: white;
  }
  @media screen and (min-width: 768px) {
  }
`;
const PaymentButton = styled(Button)`
  width: 100%;
  background-color: hotpink;
  &:hover {
    background-color: hotpink;
  }
`;

export default function CartPage() {
  const { cartProducts, addProduct, removeProductFromCart, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [country, setCountry] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((res) => {
        setProducts(res.data);
      });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  function moreOfThisProduct(productId) {
    addProduct(productId);
  }
  function lessOfThisProduct(productId) {
    removeProductFromCart(productId);
  }

  let totalPrice = 0;
  for (const productId of cartProducts) {
    const product = products.find((product) => product._id === productId);
    if (product) {
      totalPrice += product.price;
    }
  }

  async function goToPayment() {
    if (!name && !email && !city && !postalCode && !streetAddress) {
      alert("Please enter your name");
      return;
    }
    await axios
      .post("/api/checkout", {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        apartment,
        country,
        products: cartProducts.join(","),
      })
      .then((res) => {
        window.location.href = res.data.url;
      });
  }

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.location.href.includes("success")
    ) {
      setIsSuccess(true);
      clearCart();
      setInterval(() => {
        window.location.href = "/cart";
      }, 2000);
    }
  }, []);

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h2>Thank you for your order!</h2>
              <h2>
                Your order has been successfully placed. We will send you an
                email with your order information.
              </h2>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h1>Cart</h1>
            {!cartProducts?.length && <p>Your cart is empty</p>}
            {cartProducts?.length > 0 && (
              <>
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((product) => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt={product.title} />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <AddMinusButton
                            onClick={() => lessOfThisProduct(product._id)}
                          >
                            -
                          </AddMinusButton>
                          <QuantityLabel>
                            {
                              cartProducts.filter((id) => id === product._id)
                                .length
                            }
                          </QuantityLabel>
                          <AddMinusButton
                            onClick={() => moreOfThisProduct(product._id)}
                          >
                            +
                          </AddMinusButton>
                        </td>
                        <TdPrice>
                          ₩
                          {(
                            product.price *
                            cartProducts.filter((id) => id === product._id)
                              .length
                          ).toLocaleString()}
                        </TdPrice>
                      </tr>
                    ))}
                    <TotalTr>
                      <td></td>
                      <td>Total</td>
                      <TdPrice> ₩{totalPrice.toLocaleString()}</TdPrice>
                    </TotalTr>
                  </tbody>
                </Table>
              </>
            )}
          </Box>
          <Box>
            <h2>Order Information</h2>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <CityHolder>
              <Input
                type="text"
                name="city"
                placeholder="City"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
              <Input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </CityHolder>
            <Input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(event) => setStreetAddress(event.target.value)}
            />
            <Input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, etc."
              value={apartment}
              onChange={(event) => setApartment(event.target.value)}
            />
            <Input
              type="text"
              name="country"
              placeholder="Country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
            <input
              type="hidden"
              name="products"
              value={cartProducts.join(",")}
            />
            <PaymentButton block onClick={goToPayment}>
              Continue to Payment
            </PaymentButton>
          </Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
}
