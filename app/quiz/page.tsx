"use client";

import QuizForm from "@/components/quiz/quiz-form";
import { useRouter } from "next/navigation";

const QuizPage = () => {
 const router = useRouter();

 const onSubmit = (answers: boolean[]) => {
  const query = answers
   .map((answer, index) => `q${index + 1}=${answer}`)
   .join("&");
  router.push(`/results?${query}`);
 };

 return (
  <div className="flex items-center justify-center h-full p-4">
   <QuizForm onSubmit={onSubmit} />
  </div>
 );
};

export default QuizPage;
