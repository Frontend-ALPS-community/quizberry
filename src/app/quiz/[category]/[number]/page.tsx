// 문제타입이 뭐냐에 따른 컴포넌트 2-3개 따로 만들어서 구별해서 보여주기

import DefaultQuiz from '../../_components/defaultQuiz/defaultQuiz'
import OxQuiz from '../../_components/oxQuiz/oxQuiz'
import TimerQuiz from '../../_components/timerQuiz/timerQuiz'

const quizDetailPage = () => {
  return (
    <div className="">
      {/* <DefaultQuiz />
          <OxQuiz /> */}
      <TimerQuiz />
    </div>
  )
}

export default quizDetailPage
