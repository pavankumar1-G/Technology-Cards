// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-items`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} className="image-icon" />
        </div>
      </div>
    </li>
  )
}

export default CardItem
