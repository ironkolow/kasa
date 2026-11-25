import { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures, title }) {
  const [current, setCurrent] = useState(0)
  const total = pictures.length

  const goToPrevious = () => setCurrent((index) => (index - 1 + total) % total)
  const goToNext = () => setCurrent((index) => (index + 1) % total)

  return (
    <section className="slideshow">
      <img
        className="slideshow__image"
        src={pictures[current]}
        alt={`${title}, photo ${current + 1} of ${total}`}
      />

      {total > 1 && (
        <>
          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--previous"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" aria-hidden="true">
              <path d="M40 4L6 40L40 76" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            className="slideshow__arrow slideshow__arrow--next"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg width="48" height="80" viewBox="0 0 48 80" fill="none" aria-hidden="true">
              <path d="M8 4L42 40L8 76" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <p className="slideshow__counter">
            {current + 1}/{total}
          </p>
        </>
      )}
    </section>
  )
}

export default Slideshow