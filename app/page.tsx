import dynamic from "next/dynamic";
import { Suspense } from "react";
export default function Home() {
  const ImportState = dynamic(() => import("@/app/components/inputState"));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="mb-8 text-center flex gap-2 flex-col">
        <h1 className="text-3xl font-bold mb-4">Medium Premium Unlocker</h1>
        <h3 className="text-lg text-gray-600">Paste any Medium link below:</h3>
        <ImportState />;
      </section>
    </main>
  );
}
