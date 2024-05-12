'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type category = '전체' | 'javascript' | 'typescript' | 'nextJS' | 'CS'

interface DropDownProps {
  handleCategorySelect: (category: category) => void
}
export const DropRadio: React.FC<DropDownProps> = ({ handleCategorySelect }) => {
  const [position, setPosition] = React.useState('전체')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className=" w-[140px] mt-md mb-md" variant="outline">
          카테고리
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="전체">
            <Button
              variant="nonrounded"
              className=" text-sm text-gray-700 "
              onClick={() => handleCategorySelect('전체')}
            >
              전체
            </Button>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="javascript">
            <Button
              variant="nonrounded"
              className=" text-sm text-gray-700 "
              onClick={() => handleCategorySelect('javascript')}
            >
              javascript
            </Button>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="typescript">
            <Button
              variant="nonrounded"
              className=" text-sm text-gray-700 "
              onClick={() => handleCategorySelect('typescript')}
            >
              typescript
            </Button>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="nextJS">
            <Button
              variant="nonrounded"
              className=" text-sm text-gray-700 "
              onClick={() => handleCategorySelect('nextJS')}
            >
              nextJS
            </Button>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="CS">
            <Button variant="nonrounded" className=" text-sm text-gray-700 " onClick={() => handleCategorySelect('CS')}>
              CS
            </Button>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
