import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-zinc-700 w-full">
      <nav className="flex justify-center items-center ">
        <Image 
        src="/Ellipse 1.png"
        width={100}
        height={100}
        alt="image"
        />
        <h3 className="text-white ">Bonjour, Super Admin</h3>
      </nav>
    </div>
  );
};