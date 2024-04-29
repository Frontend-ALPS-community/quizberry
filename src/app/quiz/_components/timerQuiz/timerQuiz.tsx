'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const TimerQuiz: React.FC = () => {
  const [time, setTime] = useState<number>(10)

  let timer: NodeJS.Timeout // 타이머 식별자 변수 선언

  // 타이머
  const startTimer = () => {
    timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer) // 이전 타이머 중지
        }
        return Math.max(prevTime - 1, 0)
      })
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => clearInterval(timer)
  }, [])

  // 다시 풀기 btn 클릭
  const handleRetryClick = () => {
    clearInterval(timer) // 이전 타이머 중지
    setTime(10) // 시간 초기화
    startTimer() // 타이머 재시작
  }

  return (
    <div className="flex flex-col mx-7 mt-8">
      <div className="mb-4 flex items-center justify-between mb-5">
        <p className="text-sm text-primaryColor font-bold">문제 1 / 총 10문제</p>
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold p-5 my-4 border h-[250px]">Q. 1분 자기소개 해주세요.</p>
      </div>

      <div className="mt-5 text-center">
        <p className="font-bold">답변시간 :</p>
        <p className="text-red-500 font-semibold">{time}초</p>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <Button>다음 문제 풀기</Button>
        <Button onClick={handleRetryClick}>다시 풀기</Button>
      </div>
    </div>
  )
}

export default TimerQuiz
