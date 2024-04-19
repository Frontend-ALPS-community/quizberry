import { HTMLMotionProps, useMotionValueEvent, useScroll } from 'framer-motion'
import { useMemo, useState } from 'react'

const useScrollBorder = () => {
  const { scrollY } = useScroll()
  const [isTop, setIsTop] = useState(true)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (isTop !== (latest === 0)) {
      setIsTop(latest === 0)
    }
  })

  const borderVariants: HTMLMotionProps<'div'> = useMemo(
    () => ({
      initial: 'initial',
      animate: isTop ? 'notScroll' : 'scroll',
      variants: {
        scroll: {
          borderBottomColor: 'var(--gray-60)',
        },
        notScroll: {
          borderBottomColor: 'transparent',
        },
        initial: {
          borderBottomColor: 'transparent',
        },
      },
    }),
    [isTop],
  )

  return borderVariants
}
export default useScrollBorder
