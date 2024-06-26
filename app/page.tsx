"use client";

import Link from "next/link";

export default function Home() {
 return (
  <div className="flex items-center justify-center h-full p-4 min-h-screen">
   <button className="bg-blue-950 text-4xl text-white rounded-full p-6 font-bold hover:scale-105 hover:bg-blue-900 transition">
    <Link href="/quiz">Zrób quiz!</Link>
   </button>
  </div>
 );
}
