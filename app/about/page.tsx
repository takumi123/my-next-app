// app/about/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from '../components/header'; // Headerコンポーネントをインポート

interface ApiResponse {
  message: string;
}

export default function NewPage() {
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const result: ApiResponse = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header /> {/* Headerコンポーネントを適用 */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">新しいページへようこそ！</h1>
        <p className="mt-4 text-xl">このページは Next.js アプリケーションの新しい部分です。</p>
        {data ? (
          <div className="mt-8">
            <p className="text-lg">{data.message}</p>
          </div>
        ) : (
          <p className="mt-8">Loading...</p>
        )}
      </main>
    </>
  );
}