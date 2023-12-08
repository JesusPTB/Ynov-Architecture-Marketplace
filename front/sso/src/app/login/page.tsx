import React, {useState, FormEvent} from 'react'
import {LoginForm} from "@/app/components/login-form";
import Link from "next/link";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">

        <div>
          <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-gray-700">
              {/*<Image*/}
              {/*  src="/logo.png"*/}
              {/*  alt="logo"*/}
              {/*  width={100}*/}
              {/*  height={100}*/}
              {/*  className="object-contain object-center"*/}
              {/*/>*/}
              Connexion
            </h1>
            {/*<NoSsrLoginForm />*/}
            <LoginForm/>
          </div>

          <p className="mt-4 text-sm text-center text-gray-700">
            Pas encore de compte ?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              S&apos;inscrire
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
