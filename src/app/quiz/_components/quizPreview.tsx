import Link from 'next/link'
type quiz = any
const QuizPreview: React.FC<quiz> = (quiz) => {
  return (
    <div className="hover:bg-hoverColor w-[478px] h-[90px] px-sm pt-7 text-large font-bold  ">
      <Link href={'/quiz'}>
        <span className="text-subColor mr-[35px]">{quiz.quiz.id}번</span>
        <span className="text-primaryGray-400">{quiz.quiz.title}</span>
      </Link>
    </div>
  )
}

export default QuizPreview
