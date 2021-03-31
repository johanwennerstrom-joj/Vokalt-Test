import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import Layout from '@layout/layout'
import Card from '@card/card'
import { fetchPosts } from './util/fetchPosts'
import { TagContext } from './util/context/tagContext'

export default function Home() {
  const [select, setSelect] = useState()
  const [limit, setLimit] = useState(25)
  const [posts, setPosts] = useState()

  useEffect(async () => {
    if (select) {
      setLimit(25)
      const {
        data: { data },
      } = await fetchPosts(select)
      setPosts(data)
    } else {
      const {
        data: { data },
      } = await fetchPosts()
      setPosts(data)
    }
  }, [select])

  return (
    <TagContext.Provider value={{ select, setSelect }}>
      <Layout>
        <div className={styles.grid}>
          {posts &&
            posts.map((filtered, index) => {
              if (index <= limit) {
                return (
                  <Card
                    key={filtered.id}
                    source={filtered.image}
                    identifier={filtered.owner.id}
                    poster={`@${filtered.owner.firstName} ${filtered.owner.lastName}`}
                    // Hittade inte "bid" någonstnas i datan så drog in likes
                    bid={filtered.likes}
                    minutes={new Date(filtered.publishDate).getMinutes()}
                    seconds={new Date(filtered.publishDate).getSeconds()}
                    posterSource={filtered.owner.picture}
                    posterMail={filtered.owner.email}
                    altText={filtered.text}
                    posterName={`${filtered.owner.firstName} ${filtered.owner.lastName}`}
                  />
                )
              }
            })}
        </div>
        <div className={styles.loadMoreWrapper}>
          <button
            className={styles.loadMore}
            style={limit > 25 ? { display: 'none' } : null}
            onClick={() => setLimit(limit + 25)}
          >
            Load More
          </button>
        </div>
      </Layout>
    </TagContext.Provider>
  )
}
