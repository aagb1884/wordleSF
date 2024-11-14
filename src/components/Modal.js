import React from 'react'

export default function Modal({ isCorrect, solution, split, turn, extraGuesses }) {

  let splitWord = solution;
  
  if (split.length === 1) {
    const firstWord = solution.substring(0, split[0] + 1);
    const secondWord = solution.substring(split[0] + 1);
    splitWord = `${firstWord} ${secondWord}`;
  } else if (split.length === 2) {
    const firstWord = solution.substring(0, split[0] + 1);
    const secondWord = solution.substring(split[0] + 1, split[1] + 1);
    const thirdWord = solution.substring(split[1] + 1);
    splitWord = `${firstWord} ${secondWord} ${thirdWord}`;
  }

  function refreshPage() {
    window.location.reload()
  }

  return (
    <div className="stram-modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="stram-solution">{splitWord}</p>
          <p>You found the solution in {turn + extraGuesses} guesses.</p>
          <button onClick={refreshPage}>Try again</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="stram-solution">The answer was: {splitWord}</p>
          <p>Better luck next time</p>
          <button onClick={refreshPage}>Try again</button>
        </div>
      )}
    </div>
  )
}
