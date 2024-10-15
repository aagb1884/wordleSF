import InstructionsModal from "./InstructionsModal";

const Instructions = ({showInstructionsModal, setShowInstructionsModal}) => {
    return ( 
        <div className='how-it-work'>
        <button
        className='instructions-button'
        onClick={() => {setShowInstructionsModal(!showInstructionsModal)}} 
        >How does this work?</button>
        {showInstructionsModal && 
        (<InstructionsModal 
        showInstructionsModal={showInstructionsModal}
        setShowInstructionsModal={setShowInstructionsModal}/>
        )}
        
      </div>
     );
}
 
export default Instructions;