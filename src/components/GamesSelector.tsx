import React from "react";
import { DownIcon, DownSmIcon, GameIcon } from "./SvgIcons";
import Link from "next/link";

export default function GamesSelector() {
  return (
    <div className="relative group z-50">
      <div className="bg-primary-200 hover:bg-primary-800 duration-200 rounded-lg h-9">
        <div className="flex items-center gap-2 px-4 text-xs font-bold text-white h-9">
          <GameIcon />
          Games selector
          <DownSmIcon />
        </div>
        <div className="absolute left-0 top-4 pt-6 w-full h-0 group-hover:h-[180px] overflow-hidden duration-300 opacity-0 group-hover:opacity-100">
          <div className="bg-primary-200 rounded-lg shadow-md duration-300 overflow-hidden">
            <ul className="">
              {LIST.map((item, key) => (
                <li className="" key={`${item.title}-${key}`}>
                  <Link href={item.link}>
                    <div className="px-4 py-2 text-sm uppercase text-white font-bold hover:bg-primary-800 duration-200">
                      {item.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const LIST = [
  {
    title: "game 1",
    link: "#",
  },
  {
    title: "game 2",
    link: "#",
  },
  {
    title: "game 3",
    link: "#",
  },
  {
    title: "game 4",
    link: "#",
  },
];
