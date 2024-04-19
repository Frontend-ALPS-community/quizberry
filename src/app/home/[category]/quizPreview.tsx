import Link from 'next/link'

const QuizPreview = () => {
  return (
    <div className="hover:bg-hoverColor w-[476px] h-[90px] px-sm pt-7 text-large font-bold  ">
      <Link href={'/quiz'}>
        <span className="text-subColor mr-[35px]">1번</span>
        <span className="text-primaryGray-400">optional이란 무엇인가요?</span>
      </Link>
    </div>
  )
}

export default QuizPreview
