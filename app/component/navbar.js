import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-zinc-700 w-full">
      <nav className="flex justify-center items-center gap-15 w-full">
        <div>
        <Image 
        src="/image_2-removebg-preview 1.png"
        width={80}
        height={80}
        alt="image"
        />
        </div>
        <div>
        <Image 
        src="/Ellipse 1.png"
        width={80}
        height={80}
        alt="image"
        />
        </div>
        <h3 className="text-white ">Bonjour, Super Admin</h3>
      </nav>
    </div>
  );
};