import localFont from "next/font/local";
import "./globals.css";
import "./component/sidebar";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import SideBar from "./component/sidebar";
import Navbar from "./component/navbar";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Projet Cars",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#D7D7D7] h-svh ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row md:h-svh overflow-hidden  ">
          <div className="hidden  md:w-1/4 md:block overflow-y-auto h-full py-5 rounded-r-lg justify-around w-full max-w-[300px] bg-[#7AA6E3]">
            <SideBar />
            
          </div>
          <div className=" flex flex-col w-full">
            <Navbar />
            <div className="hidden md:flex justify-center">{children}</div>
          </div>
          <div className="flex  md:hidden md:gap-10 p-5 rounded-lg justify-around bg-white m-[20px] h-full">
            <a
              href="/"
              className="flex justify-center items-center gap-2 px-4 py-2 font-medium transition-colors cursor-pointer hover:bg-[#4F46E5] bg-[#EEF2FF] md:bg-[#EEF2FF] rounded-full duration-300 "
            >
              <span className="text-2xl flex  lg:hidden  text-[#4F46E5] ">
                <Squares2X2Icon class="h-6 w-6  " />
              </span>
              <span className="text-[#4F46E5] hover:text-white lg:flex hidden">
                <Squares2X2Icon class="h-6 w-6 mr-3 " /> Tableau de bord
              </span>
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-4 py-2 font-medium transition-colors duration-300 "
            >
              <span className="text-2xl ">
                <ArrowRightStartOnRectangleIcon class="h-6 w-6 text-black" />
              </span>
              <span className=" lg:flex hidden  text-black">
                Se déconnecter
              </span>
            </Link>
          </div>
          <div className="flex md:hidden">{children}</div>
        </div>
        
      </body>
    </html>
  );
}
