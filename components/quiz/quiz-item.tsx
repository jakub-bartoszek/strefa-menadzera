interface QuizItemProps {
 questionNumber: number;
 question: string;
 handleAnswerChange: (
  questionNumber: number,
  answer: boolean
 ) => void;
}

const QuizItem = ({
 questionNumber,
 question,
 handleAnswerChange
}: QuizItemProps) => {
 return (
  <fieldset className="flex flex-col gap-2 p-4">
   <legend className="text-xl text-blue-950 font-semibold">
    {question}?
   </legend>
   <div className="flex gap-x-2 items-center">
    <input
     type="radio"
     id={`q${questionNumber}a1`}
     name={`question${questionNumber}`}
     onChange={() => handleAnswerChange(questionNumber, true)}
    />
    <label htmlFor={`q${questionNumber}a1`}>Tak</label>
   </div>
   <div className="flex gap-x-2 items-center">
    <input
     type="radio"
     id={`q${questionNumber}a2`}
     name={`question${questionNumber}`}
     onChange={() => handleAnswerChange(questionNumber, false)}
    />
    <label htmlFor={`q${questionNumber}a2`}>Nie</label>
   </div>
  </fieldset>
 );
};

export default QuizItem;
