import './App.css'
import News from './components/News'

const newsList = [
  {icon:'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png', prew: 'News1', link: '#'},
  {icon:'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png', prew: 'News2', link: '#'},
  {icon:'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png', prew: 'News3', link: '#'},
  {icon:'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png', prew: 'News4', link: '#'},
  {icon:'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png', prew: 'News5', link: '#'},
]

const burseList = [
  {item: 'EUR MOEX', price: '50', changes: '+1'},
  {item: 'USD MOEX', price: '60', changes: '+2'},
  {item: 'НЕФТЬ', price: '50', changes: '+3'},
]

function App() {

  return (
    <>
      <News newsList={newsList} burseList={burseList}/>
    </>
  )
}

export default App
