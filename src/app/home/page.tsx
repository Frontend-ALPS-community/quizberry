import QuizCard from '@/@components/quizCard'

const page = () => {
  return (
    <div className="w-[480px] min-w-[400px] px-md mx-auto border-2 border-black">
      <div className="h-[307px] bg-slate-200  text-center pt-36">배너 이미지</div>
      <div className="w-[140px] h-[45px] mt-lg mb-md pt-2 text-center bg-slate-200 ">드롭다운</div>
      <QuizCard />
    </div>
  )
}

export default page
