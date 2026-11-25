import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className="collapse__arrow"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 12L12 2L22 12"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="collapse__body">
        <div className="collapse__content">
          <div className="collapse__inner">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse