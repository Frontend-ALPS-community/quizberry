export interface Icategory {
  id: number
  name: string
}

export interface IquizQuestion {
  id: number
  category_id: string
  index: number
  question: string
  answer: number
}
