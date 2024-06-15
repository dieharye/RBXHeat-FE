"use client";

import Link from "next/link";
import React from "react";
import { HomeIcon, LogoIcon } from "./SvgIcons";
import GamesSelector from "./GamesSelector";
import { useModal } from "@/contexts/ModalProvider";
import Image from "next/image";
import SubLink from "./SubLink";

export default function Header() {
  const { openModal } = useModal();
  return (
    <header className="backdrop-blur-lg z-50 bg-blue-200 flex w-full">
      <div className="grid place-content-center">
        <Link href={"/"}>
          <div className="flex items-center justify-center w-[300px]">
              <Image
                src="/icons/Logo.png"
                className="object-contain"
                width={55}
                height={55}
                alt=""
              />
            <div className="captalize inter text-[30px] font-bold text-white leading-[1] px-2">
              Blox<span className="text-blue-100">Casino</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[calc(100%-300px)]">
        <SubLink />
        <div className="flex items-center justify-between ">
          <GamesSelector />
          <button
            className="uppercase text-[#fff] font-bold text-sm bg-blue-100 hover:bg-primary-100 duration-200 rounded px-8 py-2 m-4"
            onClick={openModal}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
