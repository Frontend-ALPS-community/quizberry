import { useRouter } from 'next/router'
import QuizList from './page'

export default function CategoryLayout() {
  const router = useRouter()
  const { category_id } = router.query

  // category_id에 따라 URL을 변경
  const handleCategoryChange = (categoryId: number) => {
    router.push(`/category/${categoryId}`)
  }

  return (
    <div>
      <div>:) 카테고리별로 뿌려지는걸 layout에서 설정해주기</div>
      <QuizList />
    </div>
  )
}
