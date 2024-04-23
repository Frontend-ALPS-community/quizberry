import QuizHeader from '@/components/header/quizHeader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banuddy',
  description: 'Generated by pair3',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-content bg-white h-screen m-auto flex flex-col">
      <QuizHeader prevUrl="/" rightType="component" title="카테고리id" />
      {children}
    </div>
  )
}
