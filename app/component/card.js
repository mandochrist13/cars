import Image from 'next/image';

const ACard = () => {
  return (
    <div className="flex justify-center items-center flex-row h-3/4 w-full text-black ">
      <div className=" flex justify-center items-center flex-row w-[450px] h-[680px] perspective-1000 transition-transform duration-1000 floating">
        <div className="bg-white flex justify-around items-center flex-row rounded-2xl shadow-2xl overflow-hidden card-face card-front">
          <div className="">
            <Image
              src="/BD11.png"
              alt="Une élégante Aston Martin DB11 en exposition"
              width={400}
              height={400}
            />
          </div>
          <div className="p-6 flex flex-col justify-between h-[40%]">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Aston Martin DB11
            </h2>
            <div className="space-y-3">
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                  />
                </svg>
                <span>Marque: Aston Martin</span>
              </p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 10h10v2H7z"
                  />
                </svg>
                <span>Modèle: DB11</span>
              </p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"
                  />
                </svg>
                <span>Année: 2023</span>
              </p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                  />
                </svg>
                <span>Couleur: Midnight Blue</span>
              </p>
              <p className="flex items-center text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-500 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                  />
                </svg>
                <span>Numéro de série: AM2023DB11XYZ789</span>
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 text-black py-1 px-2 rounded-md font-bold hover:bg-blue-300 transform hover:scale-105 transition-transform duration-300">
                Supprimer
              </button>
              <button className="bg-blue-500 text-black py-1 px-2 rounded-md font-bold hover:bg-blue-300 transform hover:scale-105 transition-transform duration-300">
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACard;
