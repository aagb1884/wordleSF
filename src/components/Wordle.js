import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import Instructions from './Instructions'
import Clue from './Clue'
import Filter from './Filter'

export default function Wordle({ solution , clue, split, 
filterByCategory, setFilterByCategory}) {
  const [numberOfGuesses, setNumberOfGuesses] = useState(5);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
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

  const hideFilter = ['Club', 'Ground/Stadium', 'Player']
                      .includes(filterByCategory);

  const useClue = () => {
    setShowClue((prev) => !prev)
    setNumberOfGuesses((prev) => prev - 1);
  }

  console.log('no. of guesses', numberOfGuesses)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn >= numberOfGuesses) { 
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  

  return (
    <div>
      <div className='helpers-row'>
        <div className='helper-div'>
      <Filter 
      filterByCategory={filterByCategory}
      setFilterByCategory={setFilterByCategory}
      setNumberOfGuesses={setNumberOfGuesses}
      hideFilter={hideFilter}
      />
        </div>
        <div className='helper-div'>
      <Instructions 
      showInstructionsModal={showInstructionsModal}
      setShowInstructionsModal={setShowInstructionsModal}
      />
        </div>
      <div className='helper-div'>
       <Clue 
      showClue={showClue}
      useClue={useClue}
      clue={clue}
      />
        </div>
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
