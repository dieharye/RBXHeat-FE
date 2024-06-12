"use client";

import Link from "next/link";
import React from "react";
import { HomeIcon } from "./SvgIcons";
import GamesSelector from "./GamesSelector";
import { useModal } from "@/contexts/ModalProvider";

export default function Header() {
  const { openModal } = useModal();
  return (
    <header className="py-7 px-8 sticky top-0 backdrop-blur-lg z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <div className="w-8 h-8 rounded bg-primary-200 hover:bg-primary-800 duration-200 grid place-content-center">
              <HomeIcon className="w-4 h-4" />
            </div>
          </Link>
          <GamesSelector />
        </div>
        <button
          className="uppercase text-[#fff] font-bold text-sm bg-primary-200 hover:bg-primary-800 duration-200 rounded px-10 py-2"
          onClick={openModal}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
