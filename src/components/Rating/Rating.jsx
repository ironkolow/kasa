import './Rating.scss'

const STAR_VALUES = [1, 2, 3, 4, 5]

function Rating({ value }) {
  return (
    <div className="rating" aria-label={`Rating: ${value} out of 5`}>
      {STAR_VALUES.map((starValue) => (
        <svg
          key={starValue}
          className={`rating__star ${starValue <= value ? 'rating__star--filled' : ''}`}
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default Rating