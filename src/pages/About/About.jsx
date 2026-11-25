import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import aboutSections from '../../data/aboutSections'
import bannerImage from '../../assets/banner-about.png'
import './About.scss'

function About() {
  return (
    <>
      <Banner image={bannerImage} />
      <section className="about__list">
        {aboutSections.map((section) => (
          <Collapse key={section.title} title={section.title}>
            <p>{section.content}</p>
          </Collapse>
        ))}
      </section>
    </>
  )
}

export default About