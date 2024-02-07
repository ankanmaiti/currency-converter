import React from 'react'
import cn from '@utils/tailwindcss'

export default function CardHeader({ className, title, tagline }) {
  return (
    <div className={cn("text-left mb-6 w-full", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-400">{tagline}</p>
    </div>
  )
}
