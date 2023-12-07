"use client";

import Link from "next/link";
import {useFormState, useFormStatus} from "react-dom";
import {signup} from "@/app/actions";
import React from "react";

const initialState = {
  message: '',
}

function SubmitButton() {
  const {pending} = useFormStatus()

  // if pending is true, the button is disabled and a loading indicator is shown
  if (pending) {
    return (
      <button
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        type="submit" aria-disabled={pending}>
        Inscription...
      </button>
    )
  }
  return (
    <button
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      type="submit" aria-disabled={pending}>
      S&apos;inscrire
    </button>
  )
}

export default function SignupForm() {
  const [state, formAction] = useFormState(signup, initialState)
  const {pending} = useFormStatus()

  return (
    <form className="mt-6"
          action={formAction}
    >
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-800"
        >
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="firstname"
          className="block text-sm font-semibold text-gray-800"
        >
          Prénom
        </label>
        <input
          type="text"
          name="firstname"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="lastname"
          className="block text-sm font-semibold text-gray-800"
        >
          Nom
        </label>
        <input
          type="text"
          name="lastname"
          required
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
      {!pending && state.message != '' &&
          <div className={
            state.message === 'success' ?
              "text-green-500 text-xs italic" :
              "text-red-500 text-xs italic"
          }>
            {state.message === 'success' ?
              "Inscription réussie" :
              state.message
            }
            {state.message === 'success' &&
              <Link
                href="/login"
                className="text-xs text-blue-600 hover:underline ml-2"
              >
                Connectez-vous
              </Link>
            }
          </div>
      }
      <div className="mt-2">
        <SubmitButton/>
      </div>
    </form>
  );
}
