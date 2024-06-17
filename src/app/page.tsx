import DepositMethod from "@/components/DepositMethod";
import HomeTabs from "@/components/HomeTabs";
import Layout from "@/components/Layout";
import Originals from "@/components/Originals";
import Image from "next/image";
import Link from "next/link";
import Game from "@/components/Game";

export default function Home() {
  return (
    <Layout>
      <div className="p-8">
        <div className="flex lg:flex-row flex-col items-center gap-5 justify-between">
          <button className="uppercase text-[#fff] font-bold text-sm bg-blue-100 hover:bg-primary-500 duration-200 rounded px-8 py-2 h-[35px] w-full lg:w-fit">
            Create
          </button>
          <button className="uppercase text-[#fff] font-bold text-sm bg-blue-500 gap-2 hover:bg-primary-500 duration-200 rounded px-6 py-2 flex justify-center items-center h-[35px] w-full lg:w-fit">
            <div className="relative"> 
              <Image src="/icons/history.svg" height={20} width={20} alt=""/>
            </div>
            History
          </button>
          <div className="h-0.5 bg-gradient-bar hidden 2xl:block w-[calc(100%-246px/2-5px*5-700px)]" />
          <button className="uppercase w-full lg:w-[246px] text-[#fff] font-bold bg-blue-100 gap-2 hover:bg-primary-500 duration-200 rounded px-2 pt-1 pb-3 text-center lg:text-left">
            <span className="block text-[10px]">Total Value</span>
            <span className="block mt-2">18.58M</span>
          </button>
          <button className="uppercase w-full lg:w-[246px] text-[#fff] font-bold bg-blue-100 gap-2 hover:bg-primary-500 duration-200 rounded px-2 pt-1 pb-3 text-center lg:text-left">
            <span className="block text-[10px]">Total Games</span>
            <span className="block mt-2">23</span>
          </button>
        </div>
        <Game />
        <div className="h-[300px]" />
      </div>
    </Layout>
  );
}