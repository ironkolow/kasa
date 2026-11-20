import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Accommodation from '../pages/Accommodation/Accommodation'
import NotFound from '../pages/NotFound/NotFound'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router