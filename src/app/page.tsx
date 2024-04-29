import Link from 'next/link'
import HomePage from './home/page'

export default function Home() {
  return (
    <main className="flex w-content bg-white m-auto min-h-screen flex-col items-center">
      <HomePage />
    </main>
  )
}
