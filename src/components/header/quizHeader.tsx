'use client'

import useScrollBorder from '@/hooks/use-scroll-border'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import CloseIcon from '../icons/close'
import { ArrowLeftIcon } from '../icons/arrow-left'
import { MenuIcon } from '../icons/menu'

export interface IHeaderProps {
  title?: string
  rightType?: 'none' | 'component'
  prevUrl?: string
  handleClickBack?: () => void
  changeIconToClose?: boolean
  rightComponent?: React.ReactNode
  isFixedHeightPage?: boolean
  titleClassName?: string
  downloadComponent?: React.ReactNode
}

const QuizHeader = ({
  title,
  prevUrl,
  handleClickBack,
  changeIconToClose,
  isFixedHeightPage = false,
  titleClassName,
}: IHeaderProps) => {
  const router = useRouter()

  const defaultHandleClickBack = useCallback(() => {
    if (prevUrl) {
      router.push(prevUrl)
      return
    }
    router.back()
  }, [prevUrl, router])

  const borderVariants = useScrollBorder()

  return (
    <>
      <div className="h-[84px] w-content flex bg-primaryColor" />
      <motion.div
        {...borderVariants}
        {...(isFixedHeightPage ? { animate: 'notScroll' } : {})}
        style={{ height: '84px', padding: '0 16px' }}
        className="flex w-content justify-between items-center fixed top-0 m-auto border-b z-[8]"
      >
        <div className="">
          <motion.button
            type="button"
            style={{ width: '40px', height: '40px' }}
            className="flex items-center justify-center rounded text-gray-10 -ml-8px"
            onClick={handleClickBack || defaultHandleClickBack}
            variants={{
              whileTap: {
                scale: 0.95,
                backgroundColor: 'var(--gray-60)',
                transition: {
                  duration: 0.01,
                  bounce: 0,
                },
              },
            }}
            whileTap="whileTap"
          >
            {changeIconToClose ? <CloseIcon width={50} height={50} color="var(--gray-10)" /> : <ArrowLeftIcon />}
          </motion.button>
        </div>
        {title && <div className={twMerge('font-medium text-center text-white', titleClassName)}>{title}</div>}

        <div className="text-white">
          <MenuIcon />
        </div>
      </motion.div>
    </>
  )
}

export default QuizHeader
