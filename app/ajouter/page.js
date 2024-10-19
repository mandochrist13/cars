import Image from "next/image";

export default function Ajout() {
  return (
   
    <div className="flex justify-center items-center h-auto ml-3.5 pb-28 mt-1">
    <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-3 text-center text-black">Ajouter</h1>
      <h3 className="text-xl font-serif mb-1 text-center text-black">Remplir le formulaire</h3>

      <div className="mb-4 space-y-4">
        <input type="text" name="modele" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Marque"/>
        <input type="text" name="marque" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Modéle" />
        <input type="number" name="annee" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Année" />
        <input type="text" name="couleur" className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Couleur"/>
        <input type="text" name="numeroDeSerie"  className="w-full px-4 py-2 border border-gray-300 rounded-md" placeholder="Numéro de série"/>
        <div className="flex justify-center items-center py-5">
        <div className="relative text-center bg-white p-4 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-2xl">
          <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl -m-2 transition-all duration-300 ease-in-out hover:-m-3" />
            <div className="relative">
              <div className="upload-btn-wrapper mb-4">
               <label className="btn flex items-center border-2 border-blue-500 text-blue-500 bg-white px-6 rounded-full font-bold text-lg cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
               </svg>
                   Téléverser une image
              <input type="file" name="myfile" accept="image/*" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
            </label>
          </div>
          {/* <p className="text-gray-600 text-sm">
            {fileName ? Fichier sélectionné : ${fileName} : 'Cliquez ici pour téléverser une image'}
          </p> */}
        </div>
      </div>
    </div>

        </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
        Ajouter
      </button>
    </form>
  </div>
);
}
  