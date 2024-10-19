"use client";  // Ajoute cette ligne pour activer le rendu côté client

import { useState } from 'react';
import { useRouter } from 'next/navigation';  // Assure-toi d'utiliser `next/navigation`
import Image from 'next/image';

// Base de données fictive
const fakeDatabase = [
  { id: 1, username: 'jeans_pierre', password: '123456' },
  { id: 2, username: 'admin', password: 'admin123' },
  { id: 3, username: 'maria_23', password: 'mariaPass' }
];

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();  // Utilisation correcte de `useRouter`

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Cherche l'utilisateur dans la base de données fictive
    const user = fakeDatabase.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Sauvegarder l'utilisateur en session (fictif, utiliser localStorage ou cookies dans la réalité)
      localStorage.setItem('user', JSON.stringify(user));

      // Redirection vers la page d'accueil après connexion
      router.push('/');  // Rediriger vers la route correcte
    } else {
      // Affichage d'un message d'erreur si l'utilisateur n'est pas trouvé
      setError('Nom d’utilisateur ou mot de passe incorrect');
    }
  };

  return (
    <section className="w-full h-svh lg:flex lg:justify-between bg-white ">
      <div className="md:w-1/2 md:h-screen bg-white justify-center flex items-center">
        <Image
          src="/car-929.gif"
          width={800}
          height={100}
          alt="Picture of the author"
        />
      </div>

      <div className="md:w-1/2 h-screen sm:bg-white md:bg-blue-400 md:justify-evenly flex items-center flex-col">
        <h1 className="font-black md:text-xl md:mt-10 md:mb-5 text-neutral-900">
          BIENVENUE SUR VOTRE <br /> ESPACE ADMINISTRATEUR
        </h1>

        <div className="lg:mx-auto lg:max-w-screen-xl rounded-2xl py-16 sm:px-6 bg-white lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center font-bold text-black md:text-2xl">
              Connectez-vous à votre compte
            </h1>

            <form onSubmit={handleSubmit} className="mb-0 mt-6 space-y-[20%] text-black rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="space-y-7">
                <div>
                  <label htmlFor="username">Nom d’utilisateur</label>
                  <input
                    type="text"
                    id="username"
                    className="w-full rounded-lg border-gray-200 text-black p-4 pe-12 text-sm shadow-sm"
                    placeholder="jeans_pierre"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white"
              >
                Se connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
