import Icon from '../Icon/Icon';
import './Card.css'

function Card({ onPlay,player,index}){
  console.log(player);
  function playMove(){
    onPlay();
  }
  let icon = <Icon/>
  if(player == "X"){
    icon = <Icon name={"cross"} />
  }else if(player == "O"){
    icon = <Icon name={"circle"} />
  }

  return(
    <div className="card" onClick={() => onPlay(index) } >
        {/* <Icon name = {iconName} /> */}
        {icon}

    </div>


  )
}

export default Card;