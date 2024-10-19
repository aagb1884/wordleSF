import React, { useEffect, useState, useRef } from 'react'
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
  const [numberOfGuesses, setNumberOfGuesses] = useState(4);
  const [extraGuesses, setExtraGuesses] = useState(0);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const solutionWithoutSpaces = solution.replace(/\sg/,"");
  const { currentGuess, 
          guesses, 
          turn, 
          isCorrect, 
          usedKeys, 
          handleKeyup,
        } = useWordle(solutionWithoutSpaces, numberOfGuesses)
        
  const [showModal, setShowModal] = useState(false)
  const [showClue, setShowClue] = useState(false)
  const inputRef = useRef(null);

  

  useEffect(() => {
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    focusInput(); 

    window.addEventListener('touchstart', focusInput); 
    window.addEventListener('click', focusInput);

    return () => {
      window.removeEventListener('touchstart', focusInput); 
      window.removeEventListener('click', focusInput);
    };
  }, []);

  const refocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const hideFilter = ['Club', 'Ground/Stadium', 'Player']
                      .includes(filterByCategory) ||
                      guesses[0]

  const useClue = () => {
    setShowClue((prev) => !prev)
    setNumberOfGuesses((prev) => prev - 1);
    setExtraGuesses((prev) => prev + 1);
    refocusInput();
  }

  useEffect(() => {
    
    if (isCorrect) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn >= numberOfGuesses) { 
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn, numberOfGuesses])

  

  return (
    <div>
      <div className='helpers-row'>
        <div className='helper-div'>
      <Filter 
      filterByCategory={filterByCategory}
      setFilterByCategory={setFilterByCategory}
      setNumberOfGuesses={setNumberOfGuesses}
      setExtraGuesses={setExtraGuesses}
      hideFilter={hideFilter}
      refocusInput={refocusInput}
      />
        </div>
        <div className='helper-div'>
      <Instructions 
      showInstructionsModal={showInstructionsModal}
      setShowInstructionsModal={setShowInstructionsModal}
      refocusInput={refocusInput}
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
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} extraGuesses={extraGuesses}/>}
      <input
        type="text"
        ref={inputRef}
        onKeyUp={handleKeyup}
        style={{
          position: 'absolute',
          opacity: 0,           
          pointerEvents: 'none', 
        }}
      />
    </div>
  )
}
