"use client";

import Link from "next/link";
import { useFormState, useFormStatus } from 'react-dom'
import {login} from "@/app/actions";

const initialState = {
  message: '',
}

function SubmitButton() {
  const { pending } = useFormStatus()

  console.log('pending', pending)
  // if pending is true, the button is disabled and a loading indicator is shown
  if (pending) {
    return (
      <button
        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        type="submit" aria-disabled={pending}>
        Connexion...
      </button>
    )
  }
  return (
    <button
      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      type="submit" aria-disabled={pending}>
      Se connecter
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useFormState(login, initialState)
  return (

        <form className="mt-6" action={formAction}>
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
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
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
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              required
            />
          </div>
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Mot de passe oublié ?
          </Link>
          <div className="mt-2">
            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
              {state?.message}
            </p>
          </div>
        </form>

  );
}