import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

const QuizCard = () => {
  const quizType = 'OX 퀴즈'
  return (
    <Card className="rounded-xl bg-gray-300 text-white ">
      <CardContent className="h-[85px] mt-[30px]">
        <Image className="mx-auto" width={85} height={85} src={'/assets/logos/jsLogo.png'} alt="로고" />
      </CardContent>
      <CardDescription className="mb-sm pr-sm flex justify-end text-xLarge font-bold ">javascript</CardDescription>

      <CardFooter className="h-[50px] py-2 text-center flex justify-between  rounded-b-xl bg-zinc-500">
        <div className="py-1 px-3 rounded-lg font-semibold bg-zinc-700">OX 퀴즈</div>
        <div className=" font-bold text-medium">총 10문제</div>
      </CardFooter>
    </Card>
  )
}

export default QuizCard
