import { Link } from 'react-router-dom'
import './NotFound.scss'

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link className="not-found__link" to="/">
        Return to home page
      </Link>
    </section>
  )
}

export default NotFound