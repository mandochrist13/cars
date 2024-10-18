import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" w-full">
<nav className="flex justify-between bg-white px-3 items-center w-full h-28 text-2xl">
  <div className="flex items-center">
    <Image className="md:hidden w-[60px]" 
      src="/image_2-removebg-preview 1.png"
      width={100}
      height={100}
      alt="image"
    />
    <h1 className="text-[#081021] font-bold text-2xl lg:text-5xl">Cars</h1>
  </div>
  <div className="flex justify-between items-center gap-4 ml-14 mx-3" >
    <Image 
      src="/Ellipse 1.png"
      width={100}
      height={100}
      alt="image"
      className="w-[60px] md:w-[40px]"
    />
  
  <h3 className="text-black text-[20px] hidden md:block justify-center">Bonjour, Super Admin</h3>
  </div> 
</nav>

    </div>
  );
};