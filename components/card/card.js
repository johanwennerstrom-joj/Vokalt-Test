import styles from './card.module.scss'
const Card = (props) => {
  const { post } = props
  return (
    <div className={styles.card}>
      <img src={post.image} alt={post.text} loading='lazy' />
      <h2>{post.id}</h2>
      <div className={styles.posterDetails}>
        <img
          src={post.owner.picture}
          alt={`${post.owner.firstName} ${post.owner.lastName}`}
          className={styles.posterImg}
          loading='lazy'
        />
        <a href={`mailto:${post.owner.email}`}>{`@${post.owner.firstName} ${post.owner.lastName}`}</a>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.numberSections}>
          <span>Current bid</span> <br />
          <span>{post.likes} ETH</span>
        </div>
        <div className={styles.numberSections}>
          <span>Ending in</span> <br />
          <span>
            {new Date(post.publishDate).getMinutes()}m {new Date(post.publishDate).getSeconds()}s
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
