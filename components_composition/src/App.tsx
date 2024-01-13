import { PropsWithChildren, ReactElement } from 'react'
import './App.css'

interface CardProps {
  img?: HTMLElement,
  title: string,
  text: string,
}

const Card = ({ children }: PropsWithChildren<CardProps>) => {
  return (
    <>
      <div className='card'>{children}</div>
    </>
  )
}

function App() {
  return (
    <>
    </>
  )
}

export default App
