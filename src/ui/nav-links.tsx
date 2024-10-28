"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useWidgetSdk } from "../hooks/useWidgetSdk";

export function NavLinks() {
  const pathname = usePathname();
  useWidgetSdk();

  return (
    <nav style={{ margin: 20, display: "flex", gap: 20 }}>
      <Link style={{ color: pathname === "/" ? "red" : "" }} href="/">
        Home
      </Link>

      <Link style={{ color: pathname === "/about" ? "red" : "" }} href="/about">
        About
      </Link>
    </nav>
  );
}
