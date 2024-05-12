import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

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
