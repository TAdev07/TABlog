import React from 'react'

export default function TagSkill({icon = null, name = ''}) {
  return (
    <div className="text-gray-600 border-gray-300 border rounded-md border-solid w-fit space-x-2 px-2 py-[2px] flex items-center mr-2 text-xs">
        {icon && <span className="flex items-center">{icon}</span>}
        {name && <span>{name}</span>}
    </div>
  )
}
