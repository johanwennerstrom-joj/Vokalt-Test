import { useContext, useEffect, useState } from 'react'
import { TagContext } from '../../pages/util/context/tagContext'
import { fetchTags } from '../../pages/util/fetchTags'
import styles from './filter.module.scss'

const Filter = () => {
  const [tags, setTags] = useState(null)
  const { select, setSelect } = useContext(TagContext)

  useEffect(async () => {
    const res = await fetchTags()
    setTags(res.data.data)
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
