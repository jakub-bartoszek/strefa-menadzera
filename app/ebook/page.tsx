import { prefix } from "@/lib/prefix";
import Link from "next/link";

const Ebook = () => {
 return (
  <div className="flex items-center justify-center h-full p-4 min-h-screen">
   <button className="bg-blue-950 text-4xl text-white rounded-full p-6 font-bold hover:scale-105 hover:bg-blue-900 transition">
    <a
     href={`${prefix}Społeczeństwo informacyjne-wyzwania.pdf`}
     download="Społeczeństwo informacyjne-wyzwania"
    >
     Pobierz
    </a>
   </button>
  </div>
 );
};

export default Ebook;
