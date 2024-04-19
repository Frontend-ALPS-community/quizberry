'use client'
import { useRouter } from 'next/navigation'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => {
  const router = useRouter()
  return (
    <div className="mx-auto ">
      <div className=" p-sm flex justify-between bg-primaryColor">
        <div className="flex text-xLarge font-bold ">
          <button onClick={() => router.back()} className="w-[50px] h-[50px]  text-white  ">
            &lt;
          </button>
          <div className="w-[225px] text-white ml-md pt-1 ">{title}</div>
        </div>
        <div className="w-[40px]  text-white text-2xl  pt-1 ">=</div>
      </div>
    </div>
  )
}

export default Header
