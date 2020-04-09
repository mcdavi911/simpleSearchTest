import React from 'react'

export default function ChipName({children}) {
  return (
    <div style={{background:'black',color:'white', marginRight: 20, borderRadius: 41, padding: 15, display: 'inline-block'}}>
      {children} 
    </div>
  )
}
