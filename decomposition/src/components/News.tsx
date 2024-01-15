interface NewsProps {
  icon: string,
  prew: string,
  link: string,
}

interface BurseProps {
  item: string,
  price: string,
  changes: string,
}

const News = ({ newsList, burseList }: { newsList: NewsProps[], burseList: BurseProps[] }, index: number) => {
  return (
    <div className="news">
      <div className="categories">
        <span className="category">Категория 1</span>
        <span className="category">Категория 2</span>
        <span className="category">Категория 3</span>
      </div>
      <div className="news-prew">
        {newsList.map(news => <div className="news-item" key={index}>
            <img className="news-icon" src={news.icon} alt="***" />
            <a key={index} className="news" href={news.link}>{news.prew}</a>
          </div>)}
      </div>
      <div className="burse">
        {burseList.map(item => <div key={index}>
          <span><span className="burse-item">{item.item}</span> {item.price} {item.changes}</span>
        </div>)}
      </div>
    </div>
  )
}

export default News;