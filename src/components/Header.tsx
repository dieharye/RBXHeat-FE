"use client";

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { HomeIcon, LogoIcon } from "./SvgIcons";
import GamesSelector from "./GamesSelector";
import { useModal } from "@/contexts/ModalProvider";
import Image from "next/image";
import SubLink from "./SubLink";
import SubLinkHam from "./SubLinkHam"
import SubGamesSelector from './SubGamesSelector'

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className="backdrop-blur-lg z-50 bg-blue-200 flex lg:flex-row flex-col w-full border-b border-blue-100">
      <div className="grid place-content-center pt-5 lg:pt-0">
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
      <div className="lg:w-[calc(100%-300px)]">
        <SubLink className="lg:block hidden"/>
        <div className="flex items-center justify-between ">
        <SubLinkHam className="lg:hidden mx-4"/>
          <GamesSelector className="lg:block hidden"/>
          <SubGamesSelector className="lg:hidden mx-4"/>
          <button
            className="lg:block hidden uppercase text-[#fff] font-bold text-sm bg-blue-100 hover:bg-primary-100 duration-200 rounded px-8 py-2 m-4"
            onClick={openModal}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
