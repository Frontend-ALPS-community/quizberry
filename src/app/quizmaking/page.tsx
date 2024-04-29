'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import QuestionCategory from './_components/questionCategory'
import QuizCategory from './_components/quizCategory'

const FormSchema = z.object({
  questionC: z.string({
    required_error: 'Please select an email to display.',
  }),
  category: z.string({
    required_error: 'Please select an email to display.',
  }),
  question: z.string({
    required_error: 'Please select an email to display.',
  }),
  answer: z.string({
    required_error: 'Please select an email to display.',
  }),
})

export default function SelectForm() {
  const [category, setCategory] = useState<string>()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
  }
  const handle = (data: any) => {
    setCategory(data.target.value)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-[480px] bg-primaryGray-300 m-auto">
        <FormField
          control={form.control}
          name="questionC"
          render={({ field }) => (
            <FormItem onChange={handle}>
              <div className="flex justify-between items-center mx-sm my-md">
                <FormLabel className="">1. 질문유형 선택</FormLabel>
                {category === 'OX' ? <div>OX</div> : <div>OX아님</div>}
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="w-[200px]">
                    <SelectTrigger>
                      <SelectValue placeholder="질문 유형" />
                    </SelectTrigger>
                  </FormControl>
                  <QuestionCategory />
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="">
              <div className="flex justify-between items-center mx-sm my-md">
                <FormLabel className="text-large">2. 카테고리 선택</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="w-[200px]">
                    <SelectTrigger>
                      <SelectValue placeholder="카테고리 유형" />
                    </SelectTrigger>
                  </FormControl>
                  <QuizCategory />
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <div className="justify-between items-center mx-sm my-md">
                <FormLabel className="">3. 질문을 입력해주세요</FormLabel>
                <FormControl className="my-md">
                  <Textarea placeholder="질문 내용 입력" className="resize-none" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem>
              <div className="justify-between items-center mx-sm my-md">
                <FormLabel className="">4. 정답을 입력해주세요</FormLabel>
                <FormControl className="my-md">
                  <Textarea placeholder="정답 내용 입력" className="resize-none" {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-[440px] flex m-auto" type="submit">
          등록하기
        </Button>
      </form>
    </Form>
  )
}
