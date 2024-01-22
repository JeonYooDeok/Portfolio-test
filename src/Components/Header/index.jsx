import React from 'react'

export default function Header() {
  const header = {
    fontSize: '32px',
    fontWeight: '900',
    letterSpacing: '-1px',
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '32px',
    paddingRight: '32px',
    marginBottom: '80px'
  }
  
  return (
    <div style={header}>Jeon Yoo Deok</div>
  )
}
