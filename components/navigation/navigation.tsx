import Link from "next/link";

const Navigation = () => {
 return (
  <nav className="flex justify-center w-full bg-blue-950 text-white">
   <div className="flex items-center justify-between h-14 px-4 w-full max-w-[1400px]">
    <div className="font-extrabold text-2xl">
     <Link href="/">Strefa Menadżera</Link>
    </div>
    <div className="flex gap-4">
     <div className="font-bold py-1 px-2 rounded-full hover:bg-white hover:text-blue-950 transition">
      <Link href="/ebook">Ebook</Link>
     </div>
     <div className="font-bold py-1 px-2 rounded-full hover:bg-white hover:text-blue-950 transition">
      <Link href="/about">O Projekcie</Link>
     </div>
    </div>
   </div>
  </nav>
 );
};

export default Navigation;
