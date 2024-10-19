"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
//import { cars } from "../../data/cars";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

const ReadCars = () => {
    const [datas, setDatas] = useState([]);
  
    // Fetch data from the API on component mount
    useEffect(() => {
      const fetchCars = async () => {
        const res = await fetch("https://my-project-i2o4.onrender.com/");
        const data = await res.json();
        setDatas(data);
      };
      fetchCars();
    }, []);
    
    console.log(datas); // Pour vérifier que les données sont correctement récupérées
    const handleDelete = async (id) => {
        const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette voiture ?");
        if (confirmDelete) {
          try {
            const res = await fetch(`https://my-project-i2o4.onrender.com/voiture/${id}`, {
              method: 'DELETE',
            });
            if (res.ok) {
              // Mettre à jour l'état pour supprimer la voiture localement
              setDatas(datas.filter(car => car.id !== id));
            } else {
              console.error('Échec de la suppression de la voiture');
            }
          } catch (error) {
            console.error('Erreur lors de la suppression:', error);
          }
        }
      };
    

      const handleUpdate = async (id, updatedData) => {
        const confirmUpdate = confirm("Êtes-vous sûr de vouloir modifier cette voiture ?");
        if (confirmUpdate) {
            try {
                const res = await fetch(`https://my-project-i2o4.onrender.com/voiture/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData), // Ici, vous envoyez les données mises à jour
                });
    
                if (res.ok) {
                    // Mettre à jour l'état pour refléter la voiture modifiée localement
                    const updatedCar = await res.json(); // Récupérer les données mises à jour
                    setDatas(datas.map(car => (car.id === id ? updatedCar : car))); // Mettre à jour la liste
                } else {
                    console.error('Échec de la mise à jour de la voiture');
                }
            } catch (error) {
                console.error('Erreur lors de la mise à jour:', error);
            }
        }
    };


      return (
        <div className="min-h-full w-full md:w-[80%] gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
          {datas.map(car => (
            <div
              key={car.id} // Utilise l'ID de la voiture comme clé
              className="w-[90%] mx-auto pb-5 bg-white rounded-lg shadow-xl"
            >
              <div>
                <Image
                  src={car.image || '/Ellipse 1.png'} // Remplace par une image par défaut si pas d'image
                  width={100}
                  height={100}
                  className="object-cover h-[200px] w-full rounded-t-lg"
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
                  <p className="text-[#64748B]">{car.couleur || 'N/A'}</p>
                </div>
                <div className="flex justify-around">
                  <p className="text-black">N. Série:</p>
                  <p className="text-[#64748B]">{car.numero_de_serie || 'N/A'}</p>
                </div>
                <div className="flex mt-5 justify-around items-center">
                  <PencilSquareIcon className="h-6 w-6 text-cyan-700 cursor-pointer " onClick={() => handleUpdate(car.id)}/>
                  <TrashIcon 
                    className="h-6 w-6 text-red-700 cursor-pointer"
                    onClick={() => handleDelete(car.id)} // Appelle la fonction de suppression
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
    export default ReadCars;
      {/* User data section
      <div className="mt-10">
        <h2 className="text-xl font-bold">User List from API:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-gray-100 p-4 rounded shadow-md">
              <p className="text-lg text-black font-semibold">
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div> */}
    
