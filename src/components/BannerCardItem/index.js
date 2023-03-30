import './index.css'

const Banner = props => {
  const {eachBanner} = props
  const {headerText, description, className} = eachBanner

  return (
    <li className={className}>
      <div>
        <ul>
          <li>
            <h1>{headerText}</h1>
            <p>{description}</p>
            <button>Show More</button>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default Banner
