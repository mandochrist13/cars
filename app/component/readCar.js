"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

const ReadCars = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch("https://my-project-i2o4.onrender.com/");
      const data = await res.json();
      setDatas(data);
    };
    fetchCars();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Êtes-vous sûr de vouloir supprimer cette voiture ?"
    );
    if (confirmDelete) {
      try {
        const res = await fetch(
          `https://my-project-i2o4.onrender.com/voiture/${id}`,
          {
            method: "DELETE",
          }
        );
        if (res.ok) {
          setDatas(datas.filter((car) => car.id !== id));
        } else {
          console.error("Échec de la suppression de la voiture");
        }
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const handleUpdate = async (id, updatedData) => {
    const confirmUpdate = confirm(
      "Êtes-vous sûr de vouloir modifier cette voiture ?"
    );
    if (confirmUpdate) {
      try {
        const res = await fetch(
          `https://my-project-i2o4.onrender.com/voiture/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
          }
        );

        if (res.ok) {
          const updatedCar = await res.json();
          setDatas(datas.map((car) => (car.id === id ? updatedCar : car)));
        } else {
          console.error("Échec de la mise à jour de la voiture");
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour:", error);
      }
    }
  };

  return (
    <div className="w-full container-app mx-auto md:w-full px-4">
      {/* {datas.map((car) => (
        <div
          key={car.id}
          className="w-full justify-between flex flex-col mx-auto pb-5 bg-white rounded-lg shadow-xl"
        >
          <div>
            <Image
              src={car.image || "/car.png"}
              width={1000}
              height={1000}
              className="object-cover object-center h-auto w-full rounded-t-lg"
            />
          </div>
          <div className="my-[20px] px-[40px] md:px-[15px]">
            <div className="flex justify-around">
              <p className="text-black">Marque:</p>
              <p className="text-[#64748B]">{car.marque}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Modèle:</p>
              <p className="text-[#64748B]">{car.model}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Année:</p>
              <p className="text-[#64748B]">{car.annees}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">Couleur:</p>
              <p className="text-[#64748B]">{car.couleur || "N/A"}</p>
            </div>
            <div className="flex justify-around">
              <p className="text-black">N. Série:</p>
              <p className="text-[#64748B]">{car.numero_de_serie || "N/A"}</p>
            </div>
            <div className="flex mt-5 justify-around items-center">
              <PencilSquareIcon
                className="h-6 w-6 text-cyan-700 cursor-pointer"
                onClick={() => handleUpdate(car.id)}
              />
              <TrashIcon
                className="h-6 w-6 text-red-700 cursor-pointer"
                onClick={() => handleDelete(car.id)}
              />
            </div>
          </div>
        </div>
      ))} */}

      <table className=" w-[90%] container-app text-sm text-left mx-auto rounded-xl">
        <thead className="text-xs rounded text-black uppercase bg-[#7AA6E3] ">
          <tr className=" rounded-sm ">
            <th className="px-4 py-4 font-semibold text-black">Image</th>
            <th className="px-4 py-4 font-semibold text-black">Marque</th>
            <th className="px-4 py-4 font-semibold text-black">Modèle</th>
            <th className="px-4 py-4 font-semibold text-black">Année</th>
            <th className="px-4 py-4 font-semibold text-black">Couleur</th>
            <th className="px-4 py-4 font-semibold text-black">N. Série</th>
            <th className="px-4 py-4 font-semibold text-black">Actions</th>
            <th className="px-4 py-4 font-semibold text-black">Détails</th>
          </tr>
        </thead>
        <tbody className="">
          {datas.length > 0 ? (
            datas.map((car) => (
              <tr key={car.id} className="bg-white border-b">
                <td className="px-4 py-4">
                  <Image
                    src={car.image || "/car.png"}
                    width={100}
                    height={100}
                    className="object-cover object-center"
                  />
                </td>
                <td className="px-4 text-black py-4">{car.marque}</td>
                <td className="px-4 text-black py-4">{car.model}</td>
                <td className="px-4 text-black py-4">{car.annees}</td>
                <td className="px-4 text-black py-4">{car.couleur || "N/A"}</td>
                <td className="px-4 text-black py-4">
                  {car.numero_de_serie || "N/A"}
                </td>
                <td className="p-4 text-center flex items-center justify-center">
                  <div>
                    <PencilSquareIcon
                      className="h-4 w-4 text-cyan-700 cursor-pointer"
                      onClick={() => handleUpdate(car.id)}
                    />
                  </div>
                  <div>
                    <TrashIcon
                      className="h-4 w-4 text-red-700 cursor-pointer"
                      onClick={() => handleDelete(car.id)}
                    />
                  </div>
                </td>
                <td className="px-4 text-black py-4">
                  <Link href="/">
                    <button
                      className="bg-gray-300 text-black p-1 w-32"
                      onClick={() =>
                        setDatas(
                          "selectedCommand",
                          JSON.stringify(datas)
                        )
                      }
                      // onClick={() =>
                      //   handleDetailCommandeArticle(commande.id)
                      // }
                    >
                      Voir les détails
                    </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className=" text-black text-xl text-center">
                Aucune Voiture
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ReadCars;
