import { FormEvent } from "react";
import QuizItem from "./quiz-item";

interface QuizFormProps {
 onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const QuizForm = ({ onSubmit }: QuizFormProps) => {
 return (
  <form
   className="w-full h-full flex flex-col items-center rounded-2xl border-2 border-blue-950 bg-blue-950/10 p-4"
   onSubmit={onSubmit}
  >
   <h1 className="font-extrabold w-full text-center text-blue-950 text-3xl">
    Znajdźmy twój problem!
   </h1>
   <section className="flex flex-col w-full mt-4 gap-y-4 flex-grow">
    {[1, 2, 3].map((questionNumber) => (
     <QuizItem
      key={questionNumber}
      questionNumber={questionNumber}
     />
    ))}
   </section>
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
