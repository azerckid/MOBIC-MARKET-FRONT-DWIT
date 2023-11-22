import { useSession, signIn, signOut } from "next-auth/react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import SignInOut from "@/components/SignInOut";
import { useEffect } from "react";
import Router from "next/router";

export default function Auth() {
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      Router.push("/");
    }
  }, [session]);

  return (
    <>
      <Header />
      <Center>
        <SignInOut />
      </Center>
    </>
  );
}
