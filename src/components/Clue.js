const Clue = ({showClue, useClue, clue}) => {
    return ( 
        <div className='clue'>
        {!showClue && (<>
      <button onClick={useClue}>Need a clue?</button>
      </>)}
      {showClue && <p>{clue}</p>}
      </div>
     );
}
 
export default Clue;