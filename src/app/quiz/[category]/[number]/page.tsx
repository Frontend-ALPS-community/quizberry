// 문제타입이 뭐냐에 따른 컴포넌트 2-3개 따로 만들어서 구별해서 보여주기

import DefaultQuiz from '@/@components/defaultQuiz/defaultQuiz'
import OxQuiz from '@/@components/oxQuiz/oxQuiz'
import TimerQuiz from '@/@components/timerQuiz/timerQuiz'

const quizDetailPage = () => {
  return (
    <>
      <div>detail 문제 페이지</div>
      {/* <DefaultQuiz /> */}
      {/* <OxQuiz /> */}
      <TimerQuiz />
    </>
  )
}

export default quizDetailPage
