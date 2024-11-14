import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import solutions from './data/solutions';
import RedirectModal from './components/redirectModal';

function App() {
  const [solution, setSolution] = useState(null);
  const [clue, setClue] = useState(null);
  const [split, setSplit] = useState(null);
  const [category, setCategory] = useState(null);
  const [modalOpen, setModalOpen] = useState(true)

  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
  
    setSolution(randomSolution.word);
    setCategory(randomSolution.category);
    setClue(randomSolution.clue);
    setSplit(JSON.parse(randomSolution.split));
  }, [setCategory, setSolution, setClue, setSplit]);


  return (
    <div className="Stramash">
      <div className='stram-image-div'>
      <div className='stram-transparent-div'> 
      <div className='stram-title'>
      <h1 className='stram-title-header'>STRAMASH!</h1>
      <p>It's not not Scottish Football Wordle</p>
      </div>

      {solution && split && <Wordle 
      solution={solution} 
      clue={clue} 
      split={split}
      category={category} />}
      </div>
      {modalOpen && (
          <RedirectModal
          setModalOpen={setModalOpen} />
        )}
      </div>
    </div>
  )
}

export default App;