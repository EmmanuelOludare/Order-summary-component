import Music from './images/icon-music.svg'

const Plans = () => {
  return (
    <div className="plans">
      <img src={Music} alt="" />
      <div className="plan-selection">
        <h4>Annual Plan</h4>
        <p>$59.99/year</p>
      </div>
      <a href="/">Change</a>
    </div>
  )
}

export default Plans