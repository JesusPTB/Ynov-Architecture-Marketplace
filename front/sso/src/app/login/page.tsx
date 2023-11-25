import React, { useState, FormEvent } from 'react'
import LoginForm from "@/app/components/login-form";

export default function Page() {
  async function create(formData: FormData) {
    'use server'

    // mutate data
    // revalidate cache
  }

  return (
    <LoginForm />
  )
}
