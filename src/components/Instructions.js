import InstructionsModal from "./InstructionsModal";

const Instructions = ({showInstructionsModal, setShowInstructionsModal, refocusInput}) => {
    return ( 
        <div className='stram-how-it-work'>
        <button
        className='stram-instructions-button'
        onClick={() => {setShowInstructionsModal(!showInstructionsModal)}} 
        >How does this work?</button>
        {showInstructionsModal && 
        (<InstructionsModal 
        showInstructionsModal={showInstructionsModal}
        setShowInstructionsModal={setShowInstructionsModal}
        refocusInput={refocusInput}/>
        )}
        
      </div>
     );
}
 
export default Instructions;