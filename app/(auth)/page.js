import Image from "next/image";

export default function auth() {
  return (
    <section className="w-full h-svh lg:flex lg:justify-between bg-white ">

      <div className="md:w-1/2 md:h-screen bg-white justify-center flex items-center">
        <Image
          src="/car-929.gif"
          width={800}
          height={100}
          alt="Picture of the author"
          className=""

        />
      </div>


      <div className="md:w-1/2 h-screen sm:bg-white md:bg-blue-400 md:justify-evenly flex items-center flex-col">

                <h1 className="font-black md:text-xl md:mt-10 md:mb-5 text-neutral-900">BIENVENUE SUR VOTRE <br /> ESPACE ADMINISTRATEUR</h1>

        <div className="lg:mx-auto lg:max-w-screen-xl rounded-2xl py-16 sm:px-6 bg-white lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text- font-bold text-black md:text-2xl">Connectez-vous à votre compte</h1>


            <form action="#" className="mb-0 mt-6 space-y-[20%] text-black rounded-2xl p-4 sm:p-6 lg:p-8">

              <div className="space-y-7">
                <label htmlFor="nom " className="sr-only">nom d’utilisateur</label>

                <div>

                <div className="relative">
                  <p>nom d’utilisateur</p>
                  <input
                    type="nom "
                    className="w-full rounded-lg border-gray-200 text-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="jeans_pierre"
                  />

                  
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>

                <div className="relative">
                <p className="mb-1">mots de passe </p>
                  <input
                    type="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              </div>
              
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
              >
                se connecter 
              </button>

            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
