import { Card, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  category: string
  quizNum: number
  quizType: 'OX 퀴즈' | '주관식'
}

const QuizCard: React.FC<Props> = ({ category, quizNum, quizType }) => {
  return (
    <Link href={`/quiz/${category}`}>
      <Card className="mb-md rounded-xl bg-primaryGray-300 text-white transition ease-in-out delay-0 hover:-translate-y-1 hover:scale-110 hover:bg-primaryGray-500 duration-150  ">
        <CardContent className="h-[85px] mt-[30px]">
          <Image className="mx-auto" width={85} height={85} src={`/assets/logos/${category}.png`} alt="로고" />
        </CardContent>
        <CardDescription className="mb-sm pr-sm flex justify-end text-xLarge font-bold ">{category}</CardDescription>

        <CardFooter className="h-[50px] py-2 text-center flex justify-between  rounded-b-xl bg-zinc-500">
          <div className="py-1 px-3 rounded-lg font-semibold bg-zinc-700">{quizType}</div>
          <div className=" font-bold text-medium">총 {quizNum}문제</div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default QuizCard
