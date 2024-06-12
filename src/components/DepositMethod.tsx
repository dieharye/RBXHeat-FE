import Image from "next/image";
import React from "react";

export default function DepositMethod() {
  return (
    <div className="py-20">
      <h5 className="text-center text-white uppercase font-bold text-[14px]">our deposit methods</h5>
      <div className="flex items-center justify-center gap-[30px] mt-8">
        {DEPOSIT_METHODS.map(({ title, image }, index) => (
          <button key={index} className={`${index < 3 ? "" : "blur-[2px] pointer-events-none"}`}>
            <div className="w-10 h-10 relative">
              <Image src={image} fill alt={title} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const DEPOSIT_METHODS = [
  {
    title: "Bitcoin",
    image: "/icons/btc.svg",
  },
  {
    title: "Ethereum",
    image: "/icons/eth.svg",
  },
  {
    title: "Lite Coin",
    image: "/icons/lite.svg",
  },
  {
    title: "Visa",
    image: "/icons/visa.svg",
  },
  {
    title: "Master card",
    image: "/icons/master.svg",
  },
];
