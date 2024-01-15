type ArticleElement = {
  img: string,
  link: string,
  title: string,
  subtitle: string,
} 

type ArticleProps = {
  article: ArticleElement,
}

const Article = ({ article }: ArticleProps) => (<div className="artictle">
  <img src={article.img} alt="#" />
  <a href={article.link}></a>
  <span>{article.title}</span>
  <span>{article.subtitle}</span>
  </div>)

export default Article;