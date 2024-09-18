/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SideMenu.tsx
import {useState} from "react";
import Link from "next/link";
import {Home} from "lucide-react"; // Replace with appropriate icons

type MenuItem = {
  label: string;
  path?: string;
  icon?: any;
  subMenu?: {label: string; path: string}[];
};

type PropType = {
  children: JSX.Element;
};

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    icon: <Home className="h-6 w-6" />,
    subMenu: [
      {label: "Electronics", path: "/products/electronics"},
      {label: "Clothing", path: "/products/clothing"},
      {label: "Electronics", path: "/products/electronics"},
      {label: "Clothing", path: "/products/clothing"},
    ],
  },
  {
    label: "Products",
    icon: <Home className="h-6 w-6" />,
    subMenu: [
      {label: "Electronics", path: "/products/electronics"},
      {label: "Clothing", path: "/products/clothing"},
    ],
  },
  {
    label: "Settings",
    icon: <Home className="h-6 w-6" />,
    path: "/settings",
  },
];

export default function SideMenu({children}: PropType) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="bg-gray-900 text-white h-screen sm:w-64 w-20">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}

function MenuItem({item}: {item: MenuItem}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={item.path || "#"}
        className="flex items-center px-4 py-2 hover:bg-gray-800 gap-4"
      >
        {item.icon}
        <span className="hidden sm:inline-block">{item.label}</span>
      </Link>

      {item.subMenu && (
        <ul
          className={`absolute left-full h-screen top-0 w-48 bg-gray-800 transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          {item.subMenu.map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link
                href={subItem.path}
                className="block px-4 py-2 hover:bg-gray-700"
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
