import Image from "next/image"
import Weapon from "./Weapon";

export default function Game() {
    return (
        <div className="rounded bg-blue-200 h-[100px] mt-8 px-8 flex items-center justify-between border border-solind border-blue-500">
            <div className="relative h-full w-fit">
                <Image src="/images/Frame2131328756.svg" width={110} height={60} alt="" />
                <Image src="/images/coin.svg" width={25} height={25} alt="" className="absolute top-[23%] left-[-13px]" />
            </div>
            <div className="bg-primary-100 rounded w-[646px] h-[88px] p-1 gap-0 flex justify-between">
                <div className="bg-secondary-300 text-[12px] mb-14 pt-[3px] px-2 text-secondary-200">
                    19 items
                </div>
                <div className="flex justify-around">
                    {TOOLS.map((tool, index) => (
                        <Weapon name="bow" key={index}/>
                    ))}
                </div>
                <div className="text-secondary-200 flex items-center justify-center w-[60px]">
                    12+
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

const TOOLS: number[] = new Array(6);
TOOLS.fill(1)