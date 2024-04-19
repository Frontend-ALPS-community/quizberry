import HeaderPx from '@/components/header/header'

export default function quiz() {
  return (
    <div className="w-content flex flex-col m-auto h-screen bg-gray-100">
      <HeaderPx prevUrl="/" rightType="component" title="퀴즈" />
      <div>이 아래 내용들 보여주기</div>
    </div>
  )
}
