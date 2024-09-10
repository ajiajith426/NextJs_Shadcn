import AdminLayoutComponent from "@/layouts/adminLayout";
import AuthLayoutComponent from "@/layouts/authLayout";
import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";

type PropType = {
  pathName: string;
  children: JSX.Element;
};

const Layouts = ({pathName, children}: PropType) => {
  return pathName !== "admin" ? (
    <AuthLayoutComponent>{children}</AuthLayoutComponent>
  ) : (
    <AdminLayoutComponent>{children}</AdminLayoutComponent>
  );
};

export default function App({Component, pageProps}: AppProps) {
  const router = useRouter();
  const pathName = router?.pathname?.split("/")[1];
  return (
    <div>
      <Layouts pathName={pathName}>
        <Component {...pageProps} />
      </Layouts>
    </div>
  );

  // <Component {...pageProps} />;
}
