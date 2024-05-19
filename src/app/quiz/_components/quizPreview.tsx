import Link from 'next/link'

interface QuestionProps {
  question: {
    id: number
    category_id: string
    index: number
    question: string
    answer: number
  }
}

const QuizPreview: React.FC<QuestionProps> = ({ question }) => {
  const { category_id, id } = question

  return (
    <div className="hover:bg-hoverColor w-[478px] h-[90px] px-sm pt-7 text-large font-bold  ">
      <Link href={`/quiz/${category_id}/${id}`}>
        <span className="text-subColor mr-[35px]">{question.index}번</span>
        <span className="text-primaryGray-400">{question.question}</span>
      </Link>
    </div>
  )
}

export default QuizPreview
