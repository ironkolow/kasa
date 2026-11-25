import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/LOGO.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa, back to home" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header