import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Stack from './Components/Stack'
import './App.css'

function App() {
  const container = {
    maxWidth: '1520px',
    margin: '0 auto'
  }
  
  return (
    <>
      <Header />
      <div style={container}>
        <Main />
        <Stack />
      </div>
    </>
  )
}

export default App
