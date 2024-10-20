import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import solutions from './data/solutions';

function App() {
  const [solution, setSolution] = useState(null);
  const [clue, setClue] = useState(null);
  const [split, setSplit] = useState(null);
  const [category, setCategory] = useState(null);


  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
  
    setSolution(randomSolution.word);
    setCategory(randomSolution.category);
    setClue(randomSolution.clue);
    setSplit(JSON.parse(randomSolution.split));
  }, [setCategory, setSolution, setClue, setSplit]);


  return (
    <div className="App">
      <div className='image-div'>
      <div className='transparent-div'> 
      <div className='title'>
      <h1 className='title-header'>STRAMASH!</h1>
      <p>It's not not Scottish Football Wordle</p>
      </div>

      {solution && split && <Wordle 
      solution={solution} 
      clue={clue} 
      split={split}
      category={category} />}
      </div>
      </div>
    </div>
  )
}

export default App;