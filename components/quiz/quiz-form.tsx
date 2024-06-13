import { FormEvent } from "react";

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
     <fieldset
      key={questionNumber}
      className="flex flex-col gap-2 p-4"
     >
      <legend className="text-xl text-blue-950 font-semibold">
       Przykładowe pytanie {questionNumber}
      </legend>
      {[1, 2, 3].map((answerNumber) => (
       <div
        key={answerNumber}
        className="flex gap-x-2 items-center"
       >
        <input
         type="radio"
         id={`q${questionNumber}a${answerNumber}`}
         name={`question${questionNumber}`}
        />
        <label htmlFor={`q${questionNumber}a${answerNumber}`}>
         Odpowiedź {answerNumber}
        </label>
       </div>
      ))}
     </fieldset>
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
