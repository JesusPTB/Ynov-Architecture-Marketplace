'use server';


import {z} from 'zod'
import {json} from "stream/consumers";
import {cookies, headers} from "next/headers";

export async function login(prevState: any, formData: FormData) {
  const schema = z.object({
    username: z.string().email(),
    password: z.string(),
  });
  const result = schema.parse({
    username: formData.get('email'),
    password: formData.get('password'),
  });
  console.log('result', result);
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_GATEWAY + '/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(result),
      credentials: 'include',
    });
    const json = await res.json();
    if (json.message && !json.message.includes('success')) {
      return {
        message: json.message,
      }
    }
    const cookie = res.headers.get('set-cookie');
    if (!cookie) {
      throw new Error('No cookie');
    }
    const tokenFromCookie = cookie?.split(';')[0].split('=')[1];
    //We need to set the cookie here because we are not using the browser to make the request
    cookies().set({
      name: 'auth_token',
      value: tokenFromCookie as string,
      path: '/',
      sameSite: 'none',
      secure: true,
    });
    return {
      message: 'success',
    }
  } catch (error) {
    return {
      message: 'Une erreur est survenue',
    }
  }
}

export async function signup(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
  })

  const result = schema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
    firstname: formData.get('firstname'),
    lastname: formData.get('lastname'),
  })

  const res = await fetch(process.env.NEXT_PUBLIC_API_GATEWAY + '/auth/signup', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(result),
  })
  const json = await res.json();
  if (json.message && !json.message.includes('success')) {
    return {
      message: 'Une erreur est survenue',
    }
  }
  return {
    message: 'success',
  }
}
