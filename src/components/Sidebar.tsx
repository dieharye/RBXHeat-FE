import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChatBox from "./ChatBox";

export default function Sidebar() {
  return (
    <div className="xl:w-[360px] h-screen bg-primary-400 xl:sticky xl:top-0 absolute left-full duration-200">
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
