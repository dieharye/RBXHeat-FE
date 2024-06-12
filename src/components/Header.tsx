import Link from "next/link";
import React from "react";
import { HomeIcon } from "./SvgIcons";

export default function Header() {
  return (
    <header className="py-7 px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div className="w-8 h-8 rounded bg-primary-200 grid place-content-center">
              <HomeIcon />
            </div>
          </Link>
        </div>
        <button className="uppercase text-[#fff] font-bold text-sm bg-primary-200 rounded px-10 py-2">
          Sign In
        </button>
      </div>
    </header>
  );
}
