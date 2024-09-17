//-----------components/languageSwitcher.tsx---------//

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
const LanguageSwitcher = () => {
  const {locales, locale: currentLocale} = useRouter();
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 items-center">
      {locales?.map((locale) => (
        <li
          key={locale}
          className={`p-2 rounded border border-solid border-gray-300 ${
            locale == currentLocale ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          <Link href={pathname} locale={locale}>
            <button>Change locale to {locale} </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default LanguageSwitcher;
