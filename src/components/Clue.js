const Clue = ({showClue,setShowClue, useClues, clue}) => {

  const HandleShowClue = () => {
    useClues(setShowClue)
}

    return ( 
        <div className='clue'>
        {!showClue && (<>
      <button className="clue-button" onClick={HandleShowClue}>Need a clue?</button>
      </>)}
      {showClue && <p>{clue}</p>}
      </div>
     );
}
 
export default Clue;