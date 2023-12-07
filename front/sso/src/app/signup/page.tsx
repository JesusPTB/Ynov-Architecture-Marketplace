import Image from 'next/image'
import SignupForm from "@/app/components/signup-form";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"

      >
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-700">
            Inscription
          </h1>
          <SignupForm/>
          <p className="mt-4 text-sm text-center text-gray-700">
            Vous posséder déjà un compte ?{" "}
            <Link
              href="/"
              className="font-medium text-blue-600 hover:underline"
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
