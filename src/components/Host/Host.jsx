import './Host.scss'

function Host({ name, picture }) {
  const [firstName, ...lastName] = name.split(' ')

  return (
    <div className="host">
      <p className="host__name">
        <span>{firstName}</span>
        <span>{lastName.join(' ')}</span>
      </p>
      <img className="host__picture" src={picture} alt={name} />
    </div>
  )
}

export default Host