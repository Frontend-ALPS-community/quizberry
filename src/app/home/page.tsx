import DefaultHeader from '@/components/header/defaultHeader'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="w-full flex h-screen align-center text-center flex-col m-auto">
      <DefaultHeader />
      <Link href={'/quiz'}>
        <button className="bg-gray-100 border">quiz로 가기</button>
      </Link>
    </div>
  )
}
