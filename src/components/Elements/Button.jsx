import React from 'react'
import cn from '@utils/tailwindcss'

export default function Button({ children, className, onClick }) {
  return (
    <>
      <button onClick={onClick} className={cn("flex items-center justify-center rounded-md border-none px-4 py-2 font-bold ", className)}>
        {children}
      </button>
    </>
  )
}
