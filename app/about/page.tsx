import Image from "next/image";
import Header from "../components/header"; // Headerコンポーネントをインポート

export default function NewPage() {
  return (
    <>
      <Header /> {/* Headerコンポーネントを適用 */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold">新しいページへようこそ！</h1>
        <p className="mt-4 text-xl">このページは Next.js アプリケーションの新しい部分です。</p>
        <div className="mt-8">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
      </main>
    </>
  );
}
