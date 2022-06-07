import React from 'react'

interface Props {
  className?: string
  children?: React.ReactNode | string
  onClick: () => void
}

const Button: React.FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
