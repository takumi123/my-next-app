// app/api/hello/route.ts
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(request: Request) {
  const messages = ['こんにちは、世界！', 'Hello, world!', '¡Hola, mundo!', 'Bonjour le monde!'];
  const randomIndex = Math.floor(Math.random() * messages.length);

  return new Response(JSON.stringify({ message: messages[randomIndex] }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const responseMessage = `Received: ${data.message}`;

  return new Response(JSON.stringify({ message: responseMessage }), {
    headers: { 'Content-Type': 'application/json' },
  });
}