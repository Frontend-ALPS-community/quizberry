import { SelectContent, SelectItem } from '@/components/ui/select'

export default function QuestionCategory() {
  return (
    <SelectContent>
      <SelectItem value="OX">O,X 퀴즈</SelectItem>
      <SelectItem value="서술">서술형퀴즈</SelectItem>
      <SelectItem value="타이머">타이머</SelectItem>
    </SelectContent>
  )
}
