  import Card from "../Card/Card";
  import './Grid.css';
  function Grid(numberOfCards){
    console.log(numberOfCards);
        return(
            <div className="grid">
                {Array(9).fill(<Card />).map((el,idx) => {
                    return <Card key={idx}/>
                } )}
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> */}
            </div>
        )
    }

    export default Grid;