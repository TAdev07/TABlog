import React from 'react'

export default function Title({children}) {
  return (
    <div>
        <h3 className="uppercase mb-2">{children || 'Information'}</h3>
        <div className="w-10 border-t-2 border-solid border-b-0"></div>
    </div>
  )
}
