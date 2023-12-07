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
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(result),
      credentials: 'include',
    });
    const cookie = res.headers.get('set-cookie');
    if (!cookie) {
      throw new Error('Cookie not found');
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
    const json = await res.json();
    console.log('json', json);
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function signup(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
  })

  const result = schema.parse({
    email: formData.get('email'),
    password: formData.get('password'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
  })

  console.log('result', result);
}
