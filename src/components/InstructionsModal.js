import React from 'react'

export default function InstructionsModal({showInstructionsModal, setShowInstructionsModal, refocusInput}) {
   
  const closeModal = () => {
    setShowInstructionsModal(!showInstructionsModal)
    refocusInput();
  }
  
  return (
    <div className="modal">
         <div className='instructions'>
            <ul className='instructions-list'>
              <li>You have to guess the name of a Scottish football club, ground or player.</li>
              <li>You have four (4) guesses.</li>
              <li>You can ask for a clue, but: </li>
                <ul>
                  <li>You will lose a guess if you do.</li>
                  <li>You will not be able to use the filter (see below).</li>
                  <li>Some clues are more helpful than others.</li>
                </ul>
              <li>Before you start guessing you can choose to filter by category, but:
                <ul>
                <li>You will lose a guess if you do.</li> 
                <li>Once you select a filter you're locked in on that category unless you refresh the page.</li> 
                </ul>
              </li>
            </ul>
            <br/>
            <button 
            className='modal-return-button'
            onClick={() => closeModal()}>
                Return to Game Screen</button>
          </div>
    </div>
  )
}
