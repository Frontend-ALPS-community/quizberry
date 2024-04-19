const ArrowYIcon = ({
  isUp = false,
  size = 16,
  color = '#A6A6A6',
}: {
  isUp?: boolean
  size?: number
  color?: string
}) => {
  return isUp ? (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.76822 6.92186L11.6332 10.3598C12.176 11.0111 11.7128 12 10.865 12L5.13504 12C4.2872 12 3.82405 11.0111 4.36682 10.3598L7.23178 6.92186C7.63157 6.44211 8.36843 6.44211 8.76822 6.92186Z"
        fill={color}
      />
    </svg>
  ) : (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.23178 11.0781L4.36682 7.64018C3.82405 6.98886 4.2872 6 5.13504 6H10.865C11.7128 6 12.176 6.98886 11.6332 7.64018L8.76822 11.0781C8.36843 11.5579 7.63157 11.5579 7.23178 11.0781Z"
        fill={color}
      />
    </svg>
  )
}

export default ArrowYIcon
