import Image from "next/image";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className=" w-full ">
      <div className="flex justify-between items-center pb-10 border-b p-4">
        <div>
        <Image src={"/image_2-removebg-preview 1.png"} width={100} height={100} className="rounded-full w-[70px]" />
        </div>
        <div>
        <h1 className="text-[#081021] font-bold text-2xl lg:text-5xl">Cars</h1>
        </div>
      </div>
      <div className="flex pt-10 md:flex-col md:gap-10 p-5 rounded-lg justify-around w-full">
        <a
          href="/"
          className="flex justify-center items-center gap-2 px-4 w-full py-2 font-medium transition-colors cursor-pointer hover:bg-[#4F46E5] bg-[#EEF2FF] rounded-full duration-300 "
        >
          <span className="text-2xl flex  lg:hidden hover:text-white text-[#4F46E5] ">
          <Squares2X2Icon class="h-6 w-6  " />
          </span>
          <span className="text-[#4F46E5] hover:text-white lg:flex hidden"><Squares2X2Icon class="h-6 w-6 mr-3 " /> Tableau de bord</span>
        </a>
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-4 py-2 font-medium transition-colors duration-300 "
        >
          <span className="text-2xl ">
            <ArrowRightStartOnRectangleIcon class="h-6 w-6 text-black" />
          </span>
          <span className=" lg:flex hidden  text-black">Se déconnecter</span>
        </Link>
      </div>
    </div>
  );
}
