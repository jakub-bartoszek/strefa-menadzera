interface QuizItemProps {
 questionNumber: number;
}

const QuizItem = ({ questionNumber }: QuizItemProps) => {
 return (
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
 );
};

export default QuizItem;
