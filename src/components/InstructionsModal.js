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
              <li>You have five (5) guesses.</li>
              <li>You can ask for a clue, but: </li>
                <ul>
                  <li>You will lose a guess if you do.</li>
                  <li>Some clues are more helpful than others.</li>
                </ul>
              <li>You can ask to find out the category (club/ground/player), but:
                <ul>
                <li>You will lose a guess if you do.</li> 
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
