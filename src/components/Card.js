import Plans from './Plans'
import Hero from './images/illustration-hero.svg'

const Card = () => {
  return (
    <div className="card">
      <img src={Hero} alt="" />
      <h3>Order Summary</h3>
      <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
       <Plans />
      <button>Proceed to Payment</button>
      <h4 className="cancel">Cancel Order</h4>
    </div>
  )
}

export default Card