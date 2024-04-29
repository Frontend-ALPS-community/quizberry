import { SelectContent, SelectItem } from '@/components/ui/select'

export default function QuizCategory() {
  return (
    <SelectContent>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="javascript">Javascript</SelectItem>
      <SelectItem value="typescript">Typescript</SelectItem>
      <SelectItem value="nextjs">NextJS</SelectItem>
      <SelectItem value="cs">CS지식</SelectItem>
      <SelectItem value="library">라이브러리</SelectItem>
    </SelectContent>
  )
}
