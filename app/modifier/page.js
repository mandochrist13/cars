
export default function Modifier(){

    return (
        <>
        <div className="bg-white rounded-md flex justify-center items-center flex-col ">
        <div className="mt-6">
            <h1 className="text-2xl text-blue-500 font-bold">Modifier</h1>
        </div>
        <input type="text" className="bg-slate-300 my-6">Marque</input>
        <input type="text" className="bg-slate-300 my-6">Model</input>
        <input type="text" className="bg-slate-300 mb-6">Couleur</input>
        <input type="number" className="bg-slate-300 my-6">Année</input>
        <input type="number" className="bg-slate-300 my-6">N.Série</input>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Modifier</button>
        </div>
        </>
    );
};