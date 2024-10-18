import Image from "next/image";

export default function Navbar() {
  return (
    <div className=" w-full">
<nav className="flex justify-between items-center w-full h-28 text-2xl">
  <div>
    <Image className="md:hidden" 
      src="/image_2-removebg-preview 1.png"
      width={70}
      height={80}
      alt="image"
    />
  </div>
  <div className="flex justify-between items-center scroll-ml-14 mx-3" >
    <Image 
      src="/Ellipse 1.png"
      width={70}
      height={80}
      alt="image"
    />
  
  <h3 className="text-black hidden md:block justify-center">Bonjour, Super Admin</h3>
  </div> 
</nav>

    </div>
  );
};