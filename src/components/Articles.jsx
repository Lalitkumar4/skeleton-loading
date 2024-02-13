import { useEffect, useState } from "react"
import SkeletonArticles from "./skeletons/SkeletonArticles"

const Articles = () => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      setArticles(data)
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <div className="article" key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}

      {!articles &&
        loading &&
        [1, 2, 3, 4, 5].map((n) => <SkeletonArticles key={n} />)}
    </div>
  )
}

export default Articles
