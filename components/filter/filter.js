import { useContext, useEffect, useState } from 'react'
import { TagContext } from '../../util/context/tagContext'
import { fetchTags } from '../../util/fetchTags'
import styles from './filter.module.scss'

const Filter = () => {
  const [tags, setTags] = useState(null)
  const { select, setSelect } = useContext(TagContext)

  useEffect(() => {
    const getTags = async () => {
      const res = await fetchTags()
      setTags(res.data.data)
    }

    getTags()
  }, [])

  const clickHandler = (event) => {
    setSelect(event.target.value)
  }

  return (
    <div className={styles.filterWrapper}>
      <ul className={styles.filterList}>
        <li className={styles.listItem}>
          <button
            onClick={clickHandler}
            className={styles.tagButton}
            style={!select ? { backgroundColor: '#000', color: '#fff' } : null}
            value={''}
          >
            all
          </button>
        </li>
        {tags &&
          tags.map((tag) => {
            return (
              <li className={styles.listItem} key={tag}>
                <button onClick={clickHandler} className={styles.tagButton} value={tag}>
                  {tag}
                </button>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Filter
