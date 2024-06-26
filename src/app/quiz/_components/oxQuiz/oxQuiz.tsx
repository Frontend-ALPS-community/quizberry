'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const OxQuiz: React.FC = () => {
  const [answer, setAnswer] = useState<string>('')
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  // 예 버튼
  const handleYesClick = () => {
    setAnswer('예')
    setShowAnswer(true)
  }

  // 아니오 버튼
  const handleNoClick = () => {
    setAnswer('아니오')
    setShowAnswer(true)
  }

  return (
    <div className="flex flex-col mx-7 mt-8">
      <div className="mb-4 flex items-center justify-between mb-5">
        <p className="text-sm text-primaryColor font-bold">문제 1 / 총 10문제</p>
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold mb-2">
          Q. <br />
          React-Hook-Form을 사용한 이유는 무엇인가요? React-Hook-Form의 주요 기능과 장점에 대해 설명해주세요
        </p>
      </div>

      {showAnswer && (
        <motion.div
          className="w-full bg-gray-200 mt-3 text-center overflow-hidden"
          initial={{ x: '100%', opacity: 0 }}
          animate={showAnswer ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="inline-block">
            <p className="font-semibold">정답해설:</p>
            <p>{answer}</p>
          </div>
        </motion.div>
      )}

      <div className="mt-9 flex items-center justify-between gap-3">
        <Button variant="skyblue" className="w-[50%] h-[180px] border rounded-2xl text-center" onClick={handleYesClick}>
          예 (O)
        </Button>
        <Button
          variant="coralpink"
          className="w-[50%] h-[180px] border rounded-2xl text-center"
          onClick={handleNoClick}
        >
          아니오 (X)
        </Button>
      </div>

      <div className="flex justify-center mt-5">
        <Button className="">제출</Button>
      </div>
    </div>
  )
}

export default OxQuiz
