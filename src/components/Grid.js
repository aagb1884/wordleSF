import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn, length, split }) {

  return (
    <div>
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} length={length} split={split}/>
        }
        return <Row key={i} guess={g} length={length} split={split}/> 
      })}
    </div>
  )
}
