"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ResultItem from "@/components/result/result-item";
import problemsData from "@/data/manager_problems_solutions.json";

const ResultsContent = () => {
 const searchParams = useSearchParams();
 const [results, setResults] = useState<
  { title: string; description: string }[]
 >([]);
 const { problems, solutions } = problemsData;

 useEffect(() => {
  const answers: boolean[] = [];
  for (let i = 1; i <= 10; i++) {
   const answer = searchParams.get(`q${i}`);
   answers.push(answer === "true");
  }

  const identifiedProblems = problems.filter(
   (_, index) => answers[index]
  );
  setResults(identifiedProblems);

  if (answers.every((answer) => !answer)) {
  }
 }, [searchParams, problems]);

 return (
  <div className="flex flex-col items-center min-h-screen h-full gap-4">
   <h2 className="text-blue-950 text-2xl font-bold">Rezultaty</h2>
   {results.length > 0 ? (
    results.map((result, index) => (
     <ResultItem
      key={index}
      problem={result}
      solution={solutions[index]}
     />
    ))
   ) : (
    <div className="flex flex-col items-center gap-2">
     <p>
      Wygląda na to, że jeszcze nie odpowiedziałeś na żadne pytania.
     </p>
     <button className="bg-blue-950 text-xl text-white rounded-full py-4 px-6 font-bold hover:scale-105 hover:bg-blue-900 transition">
      <Link href="/quiz">Zrób quiz!</Link>
     </button>
    </div>
   )}
  </div>
 );
};

const ResultsPage = () => (
 <Suspense fallback={<div>Loading...</div>}>
  <ResultsContent />
 </Suspense>
);

export default ResultsPage;
