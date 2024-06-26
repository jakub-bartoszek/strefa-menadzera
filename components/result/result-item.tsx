"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ResultItemProps {
 problem: { title: string; description: string };
 solution: { title: string; description: string };
}

const ResultItem = ({ problem, solution }: ResultItemProps) => {
 const [isShown, setIsShown] = useState(false);

 return (
  <div className="flex flex-col items-center w-full bg-blue-950/10">
   <div className="w-full p-2 flex flex-col gap-y-2">
    <div className="text-lg font-semibold">{problem.title}</div>
    <div className="w-full">{problem.description}</div>
   </div>
   <button
    onClick={() => setIsShown(!isShown)}
    className="flex justify-center bg-blue-950 text-white p-1 w-full cursor-pointer hover:bg-blue-900 transition"
   >
    {!isShown ? "Pokaż" : "Schowaj"} rozwiązanie
   </button>
   <div
    className={twMerge(
     "w-full p-2 hidden flex-col gap-y-2 transition origin-top",
     isShown && "flex"
    )}
   >
    <div className="text-lg font-semibold">{solution.title}</div>
    <div>{solution.description}</div>
   </div>
  </div>
 );
};

export default ResultItem;
