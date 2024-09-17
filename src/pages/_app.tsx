import AdminLayoutComponent from "@/layouts/adminLayout";
import AuthLayoutComponent from "@/layouts/authLayout";
import "@/styles/globals.css";
import {appWithTranslation, UserConfig} from "next-i18next";
import type {AppProps} from "next/app";
import {useRouter} from "next/router";
import nextI18NextConfig from "../../next-i18next.config.js";

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

const emptyInitialI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

function App({Component, pageProps}: AppProps) {
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

export default appWithTranslation(App, emptyInitialI18NextConfig);
