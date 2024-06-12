import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChatBox from "./ChatBox";

export default function Sidebar() {
  return (
    <div className="w-[360px] min-h-screen bg-primary-400">
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
    </div>
  );
}
