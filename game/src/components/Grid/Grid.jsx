  import { useState } from "react";
  import Card from "../Card/Card";
  import './Grid.css';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

  function isWinner(board,symbol){
        // first row
        if(board[0] == board[1] && board[1] == board[2]  && board[2] == symbol){
            return symbol;
        }
        // second row
        if(board[3] == board[4] && board[4] == board[5]  && board[5] == symbol){
            return symbol;
        }
        // third row
        if(board[6] == board[7] && board[7] == board[8]  && board[8] == symbol){
            return symbol;
        }
        // first col
        if(board[0] == board[3] && board[3] == board[6]  && board[3] == symbol){
            return symbol;
        }
        // second col
        if(board[1] == board[4] && board[4] == board[7]  && board[4] == symbol){
            return symbol;
        }
        // third row
        if(board[1] == board[4] && board[4] == board[7]  && board[4] == symbol){
            return symbol;
        }
        // Diagonal
        if(board[0] == board[4] == board[8] == symbol){
            return symbol;
        }
        // Diagonal
        if(board[2] == board[4] == board[6] == symbol){
            return symbol;
        }

        // Diagonal test 
        if(board[0] == board[4] && board[4] == board[8]  && board[8] == symbol){
            return symbol;
        }

        // Diagonal 2 Test

        if(board[2] == board[4] && board[4] == board[6]  && board[6] == symbol){
            return symbol;
        }

        return "";

  }



  function Grid(numberOfCards){
    // creating State
    const [turn,setTurn] = useState(true); // false -> X turn, true -> Y turn
    const [board,setBoard] = useState(Array(9).fill("")); // ["","","","","",""]
    console.log(numberOfCards);
    const [winner,setWinner] = useState(null);
    
    // created function to play
    function play(index){
        console.log("move played");
        if(turn == true){
            board[index] ="O";
        }else{
            board[index] = "X";
        }
        const win = isWinner(board,turn ? "O" : "X")

        if(win){
            setWinner(win);
            toast.success('Congratulations  ${`won`}  won the game')
        }
        setBoard([...board])
        setTurn(!turn);

    }

    function reset(){
        setBoard(Array(9).fill(""));
        setWinner(null);
        setTurn(true);
    }

        return(
            <div className="grid-wrapper">
            {winner && (
                <>
                <h1 className="turn-highlight">Winner is {winner}   </h1>
                <button  className="reset"  onClick={reset}> Reset   </button>
                <ToastContainer position="top-center" />
                </>
            )}
            <h1 className="turn-highlight">Current Turn {(turn) ? 'O' : 'X' }</h1> 
            <div className="grid">
                {board.map((value,idx) => {
                    // return <Card  onPlay = {play}  key={idx}/>
                    return <Card  gameEnd ={winner ? true:false}   onPlay={play} player={value}  key={idx} index={idx} />

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
            </div>
        )
    }

    export default Grid;