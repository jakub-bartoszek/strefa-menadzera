"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ResultItem from "@/components/result/result-item";
import problemsData from "@/data/manager_problems_solutions.json"; // Zakładam, że plik JSON jest w katalogu `data`

const ResultsPage = () => {
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
 }, [searchParams]);

 return (
  <div className="flex flex-col items-center pt-14 min-h-screen h-full gap-4">
   <h2 className="text-blue-950 text-2xl font-bold">Rezultaty</h2>
   {results.map((result, index) => (
    <ResultItem
     key={index}
     problem={result}
     solution={solutions[index]}
    />
   ))}
  </div>
 );
};

export default ResultsPage;
