import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export const metadata = {
  title: "Register",
};
const RegisterPage = () => {
  return (
    <>
      <ClerkLoaded>
        <SignUp />;
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin" />
      </ClerkLoading>
    </>
  );
};

export default RegisterPage;
