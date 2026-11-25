import './Banner.scss'

function Banner({ image, text }) {
  return (
    <section className="banner">
      <img className="banner__image" src={image} alt="" />
      {text && <h1 className="banner__title">{text}</h1>}
    </section>
  )
}

export default Banner