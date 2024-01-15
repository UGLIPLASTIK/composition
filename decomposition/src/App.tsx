import './App.css'
import News from './components/News'
import Section from './components/Section'
import Article from './components/Article'
import Navigation from './components/Navigation'
import Search from './components/search'
import Banner from './components/Banner'
import AllWidget from './components/Widget'

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

const articleObj = {
  img: 'https://arthousefoto.ru/image/cache/catalog/category/00-kruglye/black-lion-700x700.png',
  link: '#',
  title: 'Работа над ошибками',
  subtitle: 'Смотрите и запоминайте'
}

function App() {

  return (
    <>
      <Section style='news'>
        <News newsList={newsList} burseList={burseList}/>
        <Article article={articleObj}/>
      </Section>
      <Section style='search'>
        <Navigation/>
        <Search/>
      </Section>
      <Banner/>
      <Section style='info'>
        <AllWidget count={8}/>
      </Section>
    </>
  )
}

export default App
