import { MenuIcon } from '../icons/menu'

const DefaultHeader = () => {
  return (
    <>
      <div className="h-[84px] w-content flex justify-between items-center bg-transparent	px-4 z-8">
        <div>로고이미지넣기</div>
        <div>
          <MenuIcon />
        </div>
      </div>
    </>
  )
}

export default DefaultHeader
