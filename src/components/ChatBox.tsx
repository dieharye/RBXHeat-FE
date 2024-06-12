import React from "react";
import { DownIcon, ListIcon } from "./SvgIcons";
import Image from "next/image";

export default function ChatBox() {
  return (
    <div className="px-4 py-3 bg-primary-400">
      <div className="flex justify-between items-center">
        <span className="uppercase text-white">Chat</span>
        <button>
          <ListIcon />
        </button>
      </div>
      {/* Region dropdown */}
      <div className="flex items-center justify-between py-2 px-4 bg-primary-500 mt-2">
        <div className="flex gap-4 items-center text-sm">
          <Image src="/icons/uk.svg" width={32} height={20} alt="" />
          <span className="text-secondary-100 opacity-60">English</span>
        </div>
        <span>
          <DownIcon />
        </span>
      </div>
    </div>
  );
}
