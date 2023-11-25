import Image from 'next/image'

export default function Home() {
  function test() {
    alert("test");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Louidacount inscription</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <form>
          <input type="text" placeholder="Nom" className="border border-gray-300 p-2 rounded mb-4"/>
          <input type="text" placeholder="Prénom" className="border border-gray-300 p-2 rounded mb-4"/>
          <input type="text" placeholder="Email" className="border border-gray-300 p-2 rounded mb-4"/>
          <input type="text" placeholder="Téléphone" className="border border-gray-300 p-2 rounded mb-4"/>
          <input type="password" placeholder="Mot de passe" className="border border-gray-300 p-2 rounded mb-4"/>
          <input type="password" placeholder="Confirmation du mot de passe" className="border border-gray-300 p-2 rounded mb-4"/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Connexion
          </button>
        </form>
      </div>
    </main>
  )
}
