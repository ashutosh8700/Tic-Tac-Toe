import Icon from '../Icon/Icon';
import './Card.css'
function Card({iconName}){
  return(
    // <div>
    //     <span></span>
    // </div>

    <div className="card">
        <Icon name = {iconName} />

    </div>


  )
}

export default Card;