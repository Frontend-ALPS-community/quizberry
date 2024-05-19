'use client'

import { useParams, useSearchParams } from 'next/navigation'
import DefaultQuiz from '../../_components/defaultQuiz/defaultQuiz'
import OxQuiz from '../../_components/oxQuiz/oxQuiz'
import TimerQuiz from '../../_components/timerQuiz/timerQuiz'

const quizDetailPage = () => {
  const params = useParams()
  console.log(params.number)

  const numberId = params.number as string

  let quizComponent

  if (numberId === '1') {
    quizComponent = <DefaultQuiz />
  } else if (numberId === '2') {
    quizComponent = <OxQuiz />
  } else {
    quizComponent = <TimerQuiz />
  }

  return <div className="">{quizComponent}</div>
}

export default quizDetailPage
