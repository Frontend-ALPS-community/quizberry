import { MenuIcon } from '../icons/menu'

const DefaultHeader = () => {
  return (
    <>
      <div className="h-[84px] w-full flex justify-between items-center bg-transparent	z-8">
        <div>로고</div>
        <div>
          <MenuIcon />
        </div>
      </div>
    </>
  )
}

export default DefaultHeader
