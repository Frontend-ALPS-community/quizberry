const CloseIcon = ({
  height = 16,
  width = 16,
  color = '#222222',
}: {
  width?: number
  height?: number
  color?: string
}) => {
  return (
    <svg
      className={`w-[${width}px] h-[${height}px] sm:w-5 sm:h-5`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 4L4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 4L12 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export default CloseIcon
