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

  useEffect(() => {
    const getPosts = async () => {
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
    }
    getPosts()
  }, [select])

  return (
    <TagContext.Provider value={{ select, setSelect }}>
      <Layout>
        <div className={styles.grid}>
          {posts &&
            posts.map((post, index) => {
              if (index <= limit) {
                return (
                  <Card
                    key={post.id}
                    source={post.image}
                    identifier={post.owner.id}
                    poster={`@${post.owner.firstName} ${post.owner.lastName}`}
                    // Hittade inte "bid" någonstnas i datan så drog in likes
                    bid={post.likes}
                    minutes={new Date(post.publishDate).getMinutes()}
                    seconds={new Date(post.publishDate).getSeconds()}
                    posterSource={post.owner.picture}
                    posterMail={post.owner.email}
                    altText={post.text}
                    posterName={`${post.owner.firstName} ${post.owner.lastName}`}
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
