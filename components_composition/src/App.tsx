import { PropsWithChildren, ReactElement } from 'react'
import './App.css'

interface CardProps {
  img?: ReactElement,
}

const Card = ({ children, img }: PropsWithChildren<CardProps>) => {
  return (
    <>
      <div style={{ width: "18rem", border: "1px #00000024 solid" }}>{img}{children}</div>
    </>
  )
}

const Img = () => <img className="card-img-top" src="https://img.freepik.com/free-vector/a-tree-with-green-leaves-sticker-on-white-background_1308-77128.jpg" alt="..."></img>

const CardContent = () => {
  return <div className='card-body'>
    <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
}

function App() {
  return (
    <Card img={<Img />}>
      <CardContent/>
    </Card>
  )
}

export default App
