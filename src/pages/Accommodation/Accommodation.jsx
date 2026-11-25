import { Navigate, useParams } from 'react-router-dom'
import accommodations from '../../data/accommodations.json'
import Slideshow from '../../components/Slideshow/Slideshow'
import Collapse from '../../components/Collapse/Collapse'
import Tag from '../../components/Tag/Tag'
import Host from '../../components/Host/Host'
import Rating from '../../components/Rating/Rating'
import './Accommodation.scss'

function Accommodation() {
  const { id } = useParams()
  const accommodation = accommodations.find((item) => item.id === id)

  if (!accommodation) {
    return <Navigate to="/404" replace />
  }

  const { title, pictures, description, host, rating, location, equipments, tags } =
    accommodation

  return (
    <>
      <Slideshow pictures={pictures} title={title} />

      <section className="accommodation__info">
        <div>
          <h1 className="accommodation__title">{title}</h1>
          <p className="accommodation__location">{location}</p>
          <div className="accommodation__tags">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="accommodation__side">
          <Host name={host.name} picture={host.picture} />
          <Rating value={Number(rating)} />
        </div>
      </section>

      <section className="accommodation__details">
        <Collapse title="Description">
          <p className="accommodation__text">{description}</p>
        </Collapse>
        <Collapse title="Amenities">
          <ul className="accommodation__equipments">
            {equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </>
  )
}

export default Accommodation