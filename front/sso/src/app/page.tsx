import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo.svg" alt="logo" width={100} height={100}/>
        <h1 className="text-4xl font-bold">Louidacount connexion</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <input type="text" placeholder="Email" className="border border-gray-300 p-2 rounded mb-4"/>
        <input type="password" placeholder="Mot de passe" className="border border-gray-300 p-2 rounded mb-4"/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connexion
        </button>
      </div>
    </main>
  )
}
