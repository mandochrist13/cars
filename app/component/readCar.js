import Image from "next/image";
import { cars } from "../../data/cars";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function readCar() {
  return (
    <div className="min-h-full w-full md:w-[80%] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
      {cars.map((voiture) => (
        <div
          key={voiture.id}
          className="w-[90%] mx-auto pb-5 bg-white rounded-lg shadow-xl"
        >
          <div>
            <Image
              src={voiture.image}
              width={100}
              height={100}
              className="object-cover h-[200px] w-full rounded-t-lg"
            />
          </div>
          <div className="my-[20px] px-[40px] md:px-[15px]">
            <div className="flex justify-around">
              <p className="text-black">Marque:</p>
              <p className="text-[#64748B]">{voiture.marque}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Model:</p>
              <p className="text-[#64748B]">{voiture.model}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Année:</p>
              <p className="text-[#64748B]">{voiture.an}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Couleur:</p>
              <p className="text-[#64748B]">{voiture.couleur}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">N. Série:</p>
              <p className="text-[#64748B]">{voiture.serie}</p>
            </div>
            <div className="flex mt-5 justify-around items-center">
              <PencilSquareIcon class="h-6 w-6 text-cyan-700" />
              <TrashIcon class="h-6 w-6 text-red-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
