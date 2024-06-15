import React from "react";
import { DownIcon, DownSmIcon, GameIcon } from "./SvgIcons";
import Link from "next/link";
import Image from "next/image";

export default function GamesSelector() {
  return (
    <div className="relative group z-50">
      <div className="flex">
        {LIST.map((item, key) => (
          <>
            <Link href={item.link}>
              <div className="px-4 py-2 text-sm captalize text-blue-100 font-bold hover:text-primary-200 duration-200 flex">
                <Image src={item.image} width={22} height={22} alt={item.title} className="mr-2"/>
                {item.title}
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    title: "Coinflip",
    image: "/icons/coin.svg",
    link: "#",
  },
  {
    title: "Jackpot",
    image: "/icons/coin.svg",
    link: "#",
  },
];
