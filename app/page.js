import Image from "next/image";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ReadCar from "./component/readCar";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Header section */}
      <div className="px-5 pb-6 my-7 w-full bg-white">
        <div className="flex justify-between items-center w-full py-6">
          <div>
            <h1 className="text-black text-2xl font-bold">Tableau de bord</h1>
          </div>
          <div>
            <button className="text-white text-xs flex items-center justify-center rounded-xl py-1 px-2 bg-[#1570EF]">
              <PlusCircleIcon className="h-6 w-6 text-white" /> Ajouter une
              voiture
            </button>
          </div>
        </div>

        {/* Search and filter section */}
        <div className="flex justify-center md:justify-end items-center gap-5">
          <div>
            <input
              className="border w-full text-[#716B6B] bg-[#E1DDDD] p-2 rounded-md border-[#D9D9D9]"
              placeholder="Rechercher par..."
              type="text"
            />
          </div>
          <div>
            <select className="text-[#716B6B] bg-[#E1DDDD] p-3 rounded-lg">
              <option value="Tout">Tout</option>
              <option value="Marque">Marque</option>
              <option value="Model">Model</option>
              <option value="Année">Année</option>
              <option value="Couleur">Couleur</option>
            </select>
          </div>
        </div>
      </div>

      {/* Content section with scroll */}
      <div className="w-[90%] mx-auto h-full md:h-[50%] overflow-auto flex flex-col ">
        <ReadCar />
      </div>
    </div>
  );
}
