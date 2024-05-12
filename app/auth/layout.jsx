import logoImageLight from "@/public/logo-dark.svg";
import logoImageDark from "@/public/logo.svg";
import Image from "next/image";
const AuthLayout = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-cols-1  lg:grid-cols-2">
      <div className="h-full w-full flex-col items-center justify-center px-4 lg:flex">
        <div className="space-y-4 pt-16 text-center">
          <h1 className="text-3xl font-bold">Selamat Datang!</h1>
          <p className=" text-base text-muted-foreground">
            Login atau buat akun untuk menyimpan progres animemu!
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">{children}</div>
      </div>
      <div className="hidden h-full items-center justify-center bg-secondary lg:flex">
        <Image
          className="hidden dark:block"
          src={logoImageLight}
          alt="logo"
          width={200}
          height={200}
        />
        <Image
          className="dark:hidden"
          src={logoImageDark}
          alt="logo"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
export default AuthLayout;
