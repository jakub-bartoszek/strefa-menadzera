import { FormEvent, useEffect, useState } from "react";
import QuizItem from "./quiz-item";

interface QuizFormProps {
 onSubmit: (answers: boolean[]) => void;
}

const QuizForm = ({ onSubmit }: QuizFormProps) => {
 const [answers, setAnswers] = useState<boolean[]>(
  Array(10).fill(false)
 );
 const [error, setError] = useState<boolean>(false);

 const handleAnswerChange = (
  questionNumber: number,
  answer: boolean
 ) => {
  const newAnswers = [...answers];
  newAnswers[questionNumber - 1] = answer;
  setAnswers(newAnswers);
 };

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (answers.some((answer) => answer === true)) {
   onSubmit(answers);
   setError(false);
  } else {
   setError(true);
  }
 };

 useEffect(() => {
  if (answers.some((answer) => answer === true)) {
   setError(false);
  }
 }, [answers]);

 return (
  <form
   className="w-full h-full flex flex-col items-center rounded-2xl border-2 border-blue-950 bg-blue-950/10 p-4"
   onSubmit={handleSubmit}
  >
   <h1 className="font-extrabold w-full text-center text-blue-950 text-3xl">
    Czy Twój problem dotyczy:
   </h1>
   <section className="flex flex-col w-full mt-4 gap-y-4 flex-grow">
    {[
     "Nadmiaru informacji",
     "Bezpieczeństwa danych",
     "Braku umiejętności technologicznych",
     "Komunikacji wirtualnej",
     "Zarządzania czasem online",
     "Uzależnienia od technologii",
     "Braku zaufania wobec danych online",
     "Konfliktów międzypokoleniowych",
     "Odporności na zmiany",
     "Prywatności online"
    ].map((question, index) => (
     <QuizItem
      key={index + 1}
      questionNumber={index + 1}
      question={question}
      handleAnswerChange={handleAnswerChange}
     />
    ))}
   </section>
   {error && (
    <div className="text-red-500 font-bold w-full text-center mb-4">
     Proszę zaznaczyć przynajmniej jedną odpowiedź na
     &quot;Tak&ldquo;.
    </div>
   )}
   <button
    type="submit"
    className="mt-auto bg-blue-950 text-xl text-white rounded-full py-4 px-6 font-bold hover:scale-105 hover:bg-blue-900 transition"
   >
    Zakończ
   </button>
  </form>
 );
};

export default QuizForm;
