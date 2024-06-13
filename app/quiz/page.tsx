"use client";

import QuizForm from "@/components/quiz/quiz-form";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const QuizPage = () => {
 const router = useRouter();

 const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  router.push("/results");
 };

 return (
  <div className="flex items-center justify-center pt-14 h-full">
   <QuizForm onSubmit={onSubmit} />
  </div>
 );
};

export default QuizPage;
