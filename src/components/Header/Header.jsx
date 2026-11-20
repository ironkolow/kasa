import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <span>Kasa</span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header