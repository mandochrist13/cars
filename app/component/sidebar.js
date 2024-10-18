import Image from "next/image";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <div className="flex justify-between items-center pb-10 border-b p-5">
        <div>
        <Image src={""} width={100} height={100} className="h-8 rounded-full w-auto" />
        </div>
        <div>
        <h1 className="text-[#081021] font-bold text-5xl lg:text-7xl">Cars</h1>
        </div>
      </div>
      <div className="flex pt-10 md:flex-col md:gap-10 p-5 rounded-lg justify-around w-full h-full">
        <a
          href="/"
          className="flex justify-center items-center gap-2 px-4 py-2 font-medium transition-colors cursor-pointer hover:bg-[#4F46E5] bg-[#EEF2FF] rounded-full duration-300 "
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
