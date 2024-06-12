import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChatBox from "./ChatBox";

export default function Sidebar() {
  return (
    <div className="w-[360px] h-screen bg-primary-400 sticky top-0">
      <div className="py-7 grid place-content-center">
        <Link href={"/"}>
          <div className="w-[242px] h-[54px] relative">
            <Image
              src="/images/logo.svg"
              className="object-contain"
              fill
              alt=""
            />
          </div>
        </Link>
      </div>
      <ChatBox />
      <div className="absolute left-0 bottom-0 w-full p-4">
        <div className="flex items-center justify-between bg-[#08142C] rounded-md">
          <input
            className="outline-none bg-transparent px-4 text-white"
            placeholder="Say something..."
          />
          <button className="bg-primary-200 hover:bg-primary-800 duration-200 uppercase text-xs h-11 rounded-md px-4 text-white font-medium">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
