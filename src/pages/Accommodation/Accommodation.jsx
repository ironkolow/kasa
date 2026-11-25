import { Navigate, useParams } from 'react-router-dom'
import accommodations from '../../data/accommodations.json'
import Slideshow from '../../components/Slideshow/Slideshow'

function Accommodation() {
  const { id } = useParams()
  const accommodation = accommodations.find((item) => item.id === id)

  if (!accommodation) {
    return <Navigate to="/404" replace />
  }

  return (
    <Slideshow pictures={accommodation.pictures} title={accommodation.title} />
  )
}

export default Accommodation