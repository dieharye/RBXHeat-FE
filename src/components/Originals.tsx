import Image from "next/image";
import React from "react";

export default function Originals() {
  const gameBoxClass =
    "border-4 group rounded-2xl border-primary-700 relative aspect-[3/2] overflow-hidden";
  const imgInClass = "object-cover group-hover:scale-105 duration-200";
  return (
    <div className="">
      <div className="flex gap-10 items-center justify-center py-10">
        <div className="h-0.5 bg-gradient-bar w-[calc((100%-375px)/2-60px)]" />
        <span className="uppercase text-4xl font-bold text-primary-200">
          rbx heat originals
        </span>
        <div className="h-0.5 bg-gradient-bar w-[calc((100%-375px)/2-60px)] rotate-180" />
      </div>
      <div className="grid gap-[60px] grid-cols-3">
        {ORIGINALS.map(
          (item, index) =>
            index < 3 && (
              <div className={gameBoxClass} key={index}>
                <Image
                  src={item.image}
                  className={imgInClass}
                  alt={item.title}
                  fill
                />
              </div>
            )
        )}
      </div>
      <div className="grid gap-10 grid-cols-4 mt-8">
        {ORIGINALS.map(
          (item, index) =>
            index >= 3 && (
              <div className={gameBoxClass} key={index}>
                <Image
                  src={item.image}
                  className={imgInClass}
                  alt={item.title}
                  fill
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

const ORIGINALS = [
  {
    title: "case battles",
    image: "/images/g-1.jpg",
  },
  {
    title: "cases",
    image: "/images/g-2.png",
  },
  {
    title: "black jack",
    image: "/images/g-3.png",
  },
  {
    title: "mines",
    image: "/images/g-4.png",
  },
  {
    title: "conflip",
    image: "/images/g-5.png",
  },
];
