import Link from "next/link";

const Navigation = () => {
 return (
  <nav className="flex justify-center w-full bg-blue-950 text-white">
   <div className="flex items-center justify-between h-14 px-4 w-full max-w-[1400px]">
    <div className="font-extrabold text-2xl">
     <Link href="/">Strefa Menadżera</Link>
    </div>
   </div>
  </nav>
 );
};

export default Navigation;
