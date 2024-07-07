import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS ={
  X:'x',
  O:'0',
}

const Square =({Children,updateBoard,index,isSelected})=>{ }
  const className=`square ${isSelected}  ? 'is-selected' : ''}`
  const handleClick =()=>{
    updateBoard(index)

  }
  return(
  <div onClick= {handleClick}className={className}>
    {Children}
  </div>
  )

function App() {
 const[board, setBoard]  =useState(Array(9).fill(null))
 console.log(board); 

 const [turn,setTurn]= useState(TURNS.X)
 const [winer,setWiner]= useState(null)

 const updateBoard=(index)=>{
  if (board[index])return

  //spred operator para hacer una copia del array
  const newBoard =[...board]
  newBoard[index]=turn
  setBoard(newBoard)

  const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
 }
 
  return (
    <>
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {board.map((_ ,index) =>{
          return (
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
            {index}
            </Square>
          )

        })}
        
      </section>
      <section className='turn'>
        <Square isSlected ={turn==TURNS.X}>
          {TURNS.X}

        </Square>

        <Square isSlected ={turn ==TURNS.O}>
          {TURNS.O}

        </Square>
      </section>

    </main>
     
    </>
  )
}

export default App
