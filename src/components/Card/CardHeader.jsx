import React from 'react'
import cn from '../../utils/tailwindcss'

export default function CardHeader({ className, children }) {
  return (
    <div className={cn("text-left mb-6 w-full", className)}>
      {children}
    </div>
  )
}
