'use client'

import QuizHeader from '@/components/header/quizHeader'
import { useParams } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const params = useParams()
  console.log(params.category)

  const titleString = params.category

  return (
    <div className="w-content bg-white m-auto flex flex-col">
      <QuizHeader prevUrl="/" rightType="component" title={String(titleString)} />
      {children}
    </div>
  )
}
