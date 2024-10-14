import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({ solution , category, split }) {
  const [numberOfGuesses, setNumberOfGuesses] = useState(5);
  const solutionWithoutSpaces = solution.replace(/\sg/,"");
  const { currentGuess, 
          guesses, 
          turn, 
          isCorrect, 
          usedKeys, 
          handleKeyup 
        } = useWordle(solutionWithoutSpaces, numberOfGuesses)
        
  const [showModal, setShowModal] = useState(false)
  const [showClue, setShowClue] = useState(false)

  const useClue = () => {
    setShowClue((prev) => !prev)
    setNumberOfGuesses((prev) => prev - 1);
  }

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn >= numberOfGuesses - 1) { 
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <div className='clue'>
        {!showClue && (<>
      <button onClick={useClue}>Need a clue?</button>
      </>)}
      {showClue && <p>{category}</p>}
      
      </div>
      <Grid 
      guesses={guesses} 
      currentGuess={currentGuess} 
      turn={turn} 
      length={solutionWithoutSpaces.length} 
      split={split} />
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
    </div>
  )
}
