'use client'
import { useState } from 'react'
type category = '전체' | 'javascript' | 'typescript' | 'nextJS' | 'computer science'

interface DropDownProps {
  handleCategorySelect: (category: category) => void
}
const DropDown: React.FC<DropDownProps> = ({ handleCategorySelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="w-[140px] h-[45px] mt-lg mb-md rounded  text-center bg-slate-200 ">
      <div className="block relative">
        <button
          className="w-[140px] h-[45px]  bg-slate-200 hover:bg-slate-600 text-white font-semibold py-2 px-11 rounded inline-flex items-center"
          onClick={toggleMenu}
        >
          전체
          <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-[140px] text-center bg-white rounded-md shadow-lg">
            <button
              className="block w-full  text-center  py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleCategorySelect('전체')}
            >
              ALL
            </button>
            <button
              className="block w-full  text-center  py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleCategorySelect('javascript')}
            >
              javascript
            </button>
            <button
              className="block w-full  text-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleCategorySelect('typescript')}
            >
              typescript
            </button>
            <button
              className="block w-full  text-center py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleCategorySelect('nextJS')}
            >
              nextJS
            </button>
            <button
              className="block w-full  text-center  py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleCategorySelect('computer science')}
            >
              computer science
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropDown
