import styles from './layout.module.scss'
import Nav from '@nav/nav'
import Filter from '@filter/filter'

const Layout = ({ children }) => {
  return (
    <main className={styles.main}>
      <Nav />
      <Filter />
      {children}
    </main>
  )
}

export default Layout
