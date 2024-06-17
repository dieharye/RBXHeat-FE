'use client'

import Image from "next/image"
import Weapon from "./Weapon";
import styled from "styled-components"
import { useState, useEffect } from 'react';

export default function Game() {
    const [remain, setRemain] = useState(12);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 925) {
                setRemain(18);
            } else if (width < 975) {
                setRemain(17);
            } else if (width < 1400) {
                setRemain(16);
            } else if (width < 1550) {
                setRemain(14);
            } else if (width < 1600) {
                setRemain(13);
            } else {
                setRemain(12);
            }
        };

        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="rounded bg-blue-200 h-[100px] mt-8 px-8 flex items-center justify-between border border-solid border-blue-500">
            <div className="relative h-full w-fit">
                <Image src="/images/Frame2131328756.svg" width={110} height={60} alt="" />
                <Image src="/images/coin.svg" width={25} height={25} alt="" className="absolute top-[23%] left-[-13px]" />
            </div>
            <div className="bg-primary-100 rounded h-[88px] p-1 gap-0 flex justify-between">
                <div className="bg-secondary-300 text-[12px] mb-14 pt-[3px] px-2 text-secondary-200">
                    19 items
                </div>
                <Wrapper className="flex justify-around">
                    {TOOLS.map((tool, index) => (
                        <Weapon name="bow" className={`weapon-${index}`} key={index} />
                    ))}
                </Wrapper>
                <div className="text-secondary-200 flex items-center justify-center w-[60px]">
                    {`${remain}+`}
                </div>

            </div>
            <div>
                <span className="block text-white text-[20px] text-center">R$466k</span>
                <span className="block text-[17px] text-secondary-200">R$466k-R$513k</span>
            </div>
            <div>
                <Image src="/images/CoinIcon.svg" width={67} height={63} alt="" />
            </div>
            <div>
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

const TOOLS: number[] = new Array(6).fill(1);

const Wrapper = styled.div`
  @media screen and (max-width: 1600px) {
    .weapon-5 {
      display: none;
    }
  }

  @media screen and (max-width: 1550px) {
    .weapon-4 {
      display: none;
    }
  }

  @media screen and (max-width: 1400px) {
    .weapon-3 {
      display: none;
    }
  }

  @media screen and (max-width: 975px) {
    .weapon-2 {
      display: none;
    }
  }

  @media screen and (max-width: 925px) {
    .weapon-1 {
      display: none;
    }
  }
`;