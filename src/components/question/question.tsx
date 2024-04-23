import Link from 'next/link'

export interface QuestionProps {
  question: {
    id: number
    category_id: string
    number: number
    question: string
    options: string[]
    answer: number
  }
}

export const Question: React.FC<QuestionProps> = ({ question }) => {
  const { category_id } = question

  return (
    <Link href={`/quiz/${category_id}`}>
      <div className="border p-4 my-4">
        <div className="text-lg text-primaryColor font-semibold">{question.category_id}</div>
        <div className="text-lg font-semibold">{question.question}</div>
        <div className="list-disc pl-6">
          {question.options.map((option, index) => (
            <div key={index}>{option}</div>
          ))}
        </div>
      </div>
    </Link>
  )
}
