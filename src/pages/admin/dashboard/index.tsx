import {Breadcrumbs} from "@/components/shared-components/breadcrumbs";
import React from "react";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function DashboardPage() {
  const {locale} = useRouter();
  const {t} = useTranslation("common");

  return (
    <div>
      <Breadcrumbs items={[{title: "Dashboard", link: "/admin/dashboard"}]} />
      <div className="max-w-[90vw] min-h-[65vh] mx-auto my-10">
        <div className="flex flex-col gap-4">
          <div className="">
            <h1 className="text-3xl font-bold text-center">
              {t("A Simple Example for Trasnslation")}
            </h1>
            <h3 className="text-2xl font-bold">
              Current localization language: {locale}
            </h3>
            <p>
              {t(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              )}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold">
              {t("Where does it come from?")}
            </h3>
            <p>
              {t(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              )}
            </p>
            <p>
              {t(
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;

export async function getStaticProps({locale}: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }; 
}
