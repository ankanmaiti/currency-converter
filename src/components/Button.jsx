import React from 'react'
import cn from '../utils/tailwindcss'

export default function Button({children, className}) {
  return (
    <>
      <button className={cn("rounded-md border px-3 py-2 font-bold ", className)}>
        {children}
      </button>
    </>
  )
}
