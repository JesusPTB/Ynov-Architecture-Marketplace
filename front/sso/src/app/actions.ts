'use server';


import { z } from 'zod'
import {json} from "stream/consumers";


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
    const data = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(result),
    }).then((res) => res.json());

    console.log('data', data);
    if (data && data.token) {
      console.log('data.token', data.token);
      localStorage.setItem('token', data.token);
      return {message: 'Login successful'};
    } else {
      console.log('Login failed');
      return {message: 'Login failed'};
    }
  } catch (e) {
    console.error(e);
    return {message: 'Login failed'};
  }
}
