'use client'

import Image from "next/image"
import Weapon from "./Weapon";
import styled from "styled-components"
import { useState, useEffect, useCallback, useRef } from 'react';

const initialRemain = 13;

export default function Game() {
  const [tools, setTools] = useState<number[]>([1, 1, 1, 1, 1, 1])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 400) {
        setTools(() => {
          const result = new Array(1).fill(1);
          return result
        })
      } else if (width < 768) {
        setTools(() => {
          const result = new Array(3).fill(1);
          return result
        })
      } else {
        setTools(() => {
          const result = new Array(6).fill(1);
          return result
        })
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="rounded bg-blue-200 mt-8 py-2 px-8 flex 2xl:flex-row flex-col items-center justify-between border border-solid border-blue-500 overflow-hidden">
      <div className="relative h-[90px] w-[110px]">
        <Image src="/images/Frame2131328756.svg" className="absolute bottom-[25px]" width={110} height={60} alt="" />
        <Image src="/images/coin.svg" width={25} height={25} alt="" className="absolute top-[23%] left-[-13px]" />
      </div>
      <div className="bg-primary-100 rounded h-[88px] p-1 gap-0 flex justify-between max-w-[600px]">
        {/* <div className="bg-secondary-300 text-[12px] mb-14 pt-[3px] px-2 text-secondary-200">
                    19 items
                </div> */}
        <div className="flex justify-around">
          {tools.map((tool, index) => (
            <Weapon name="bow" className={`weapon-${index} border border-solid border-white`} key={index} />
          ))}
        </div>
        <div className="text-secondary-200 flex items-center justify-center w-[60px]">
          {`+${19 - tools.length}`}
        </div>

      </div>
      <div className="w-fit py-2">
        <span className="block text-white text-[20px] text-center">R$466k</span>
        <span className="block text-[17px] text-secondary-200">R$466k-R$513k</span>
      </div>
      <div className="w-fit py-2">
        <Image src="/images/CoinIcon.svg" width={67} height={63} alt="" />
      </div>
      <div className="w-fit">
        <div className="relative flex text-secondary-200 bg-primary-100 text-[15px] px-4 py-1">
          <Image src="/images/eye.svg" className="mr-2" width={19} height={13} alt="" />
          Watch
        </div>
        <div className="text-center text-secondary-200 text-[14px] mt-2">
          Ended
        </div>
      </div>
    </div>
  )
}