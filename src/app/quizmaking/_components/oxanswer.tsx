import { FormControl, FormItem, FormLabel } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

// interface IProps {
//     field:
// }
export default function OxAnswer({ field }: any) {
  return (
    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value="all" />
        </FormControl>
        <FormLabel className="font-normal">All new messages</FormLabel>
      </FormItem>
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value="mentions" />
        </FormControl>
        <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
      </FormItem>
      <FormItem className="flex items-center space-x-3 space-y-0">
        <FormControl>
          <RadioGroupItem value="none" />
        </FormControl>
        <FormLabel className="font-normal">Nothing</FormLabel>
      </FormItem>
    </RadioGroup>
  )
}
