import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const ArticleCardGroup = async () => {
  const payload = await getPayload({ config })
  const articles = await payload.find({ collection: 'articles' })

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-16`}>
      {articles.docs.map((article, i) => (
        <div
          key={i}
          className="rounded-lg bg-gray-900 border border-white/10 hover:bg-gray-800 transition-colors duration-300"
        >
          <a
            href={article.href}
            target="_blank"
            data-umami-event-article={article.title}
            className="p-8 block"
          >
            <h3 className="text-xl font-bold mb-2 text-red-500">
              {article.title}
              <span>&rarr;</span>
            </h3>
            <p>{article.body}</p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default ArticleCardGroup
