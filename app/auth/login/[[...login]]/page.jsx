import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Login",
};
const LoginPage = () => {
  return (
    <>
      <ClerkLoaded>
        <SignIn />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin" />
      </ClerkLoading>
    </>
  );
};

export default LoginPage;
