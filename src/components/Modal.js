import React from 'react'

export default function Modal({ isCorrect, solution, turn, extraGuesses }) {

  function refreshPage() {
    window.location.reload()
  }

  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn + extraGuesses} guesses.</p>
          <button onClick={refreshPage}>Try again</button>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time</p>
          <button onClick={refreshPage}>Try again</button>
        </div>
      )}
    </div>
  )
}
