import QuizCard from '@/@components/quizCard'

const page = () => {
  return (
    <div className="w-[480px] min-w-[400px] px-md mx-auto border-2 border-black">
      <div className="h-[307px] relative bg-slate-200  text-center pt-36">
        <div className="absolute top-0 left-0 w-[115px] h-[45px] pt-2 bg-pink-400">LOGO</div>배너 이미지
      </div>
      <div className="w-[140px] h-[45px] mt-lg mb-md pt-2 text-center bg-slate-200 ">드롭다운</div>
      <QuizCard category="javascript" quizNum={10} quizType="OX 퀴즈" />
      <QuizCard category="typescript" quizNum={8} quizType="OX 퀴즈" />
      <QuizCard category="nextJS" quizNum={10} quizType="OX 퀴즈" />
      <QuizCard category="computer science" quizNum={11} quizType="주관식" />
    </div>
  )
}

export default page
