import styles from './card.module.scss'
const Card = (props) => {
  const { source, identifier, poster, bid, posterSource, posterMail, altText, minutes, seconds, posterName } = props
  return (
    <div className={styles.card}>
      <img src={source} alt={altText} loading='lazy' />
      <h2>{identifier}</h2>
      <div className={styles.posterDetails}>
        <img src={posterSource} alt={posterName} className={styles.posterImg} loading='lazy' />
        <a href={`mailto:${posterMail}`}>{poster}</a>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.numberSections}>
          <span>Current bid</span> <br />
          <span>{bid} ETH</span>
        </div>
        <div className={styles.numberSections}>
          <span>Ending in</span> <br />
          <span>
            {minutes}m {seconds}s
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
