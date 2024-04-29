'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

const DefaultQuiz: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(true)

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <div className="flex flex-col mx-7 mt-8">
      <div className="mb-4 flex items-center justify-between mb-5">
        <p className="text-sm text-primaryColor font-bold">문제 1 / 총 10문제</p>
        <div className="flex text-center items-center">
          <Label className="mr-2 text-gray-500" htmlFor="답변숨기기">
            답변숨기기
          </Label>
          <Switch id="답변숨기기" onChange={toggleAnswer} />
        </div>
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold mb-2">
          Q. <br />
          React-Hook-Form을 사용한 이유는 무엇인가요? React-Hook-Form의 주요 기능과 장점에 대해 설명해주세요
        </p>
      </div>

      {showAnswer && (
        <div className="mt-2">
          <Input
            className="placeholder:text-gray-400 h-[200px] w-full rounded border border-[#e5e7eb] text-sm focus-visible:border-[#6EA5FF] focus-visible:ring-[0]"
            placeholder="모범답안"
          />
        </div>
      )}

      <div className="mt-9">
        <div className="mb-4 font-semibold ">내 답변</div>
        <Input
          className="placeholder:text-gray-400 h-[250px] w-full rounded border border-[#e5e7eb] text-sm focus-visible:border-[#6EA5FF] focus-visible:ring-[0]"
          placeholder="정답을 입력해주세요"
        />
      </div>
      <div className="flex justify-center mt-5">
        <Button className="">제출</Button>
      </div>
    </div>
  )
}

export default DefaultQuiz
