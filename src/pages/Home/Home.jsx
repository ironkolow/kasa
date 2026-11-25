import accommodations from '../../data/accommodations.json'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import bannerImage from '../../assets/banner-home.png'
import './Home.scss'

function Home() {
  return (
    <>
      <Banner image={bannerImage} text="Copy the text from Figma" />
      <section className="home__list">
        {accommodations.map((accommodation) => (
          <Card
            key={accommodation.id}
            id={accommodation.id}
            title={accommodation.title}
            cover={accommodation.cover}
          />
        ))}
      </section>
    </>
  )
}

export default Home