import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Layout.scss'

function Layout() {
  return (
    <>
      <div className="layout__container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout