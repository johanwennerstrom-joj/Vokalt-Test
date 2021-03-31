import Styles from './nav.module.scss'

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <a href='/'>
        <img src='/icon.svg' alt='logo, purely decorational' />
      </a>
      <button>Connect wallet</button>
    </nav>
  )
}
export default Nav
