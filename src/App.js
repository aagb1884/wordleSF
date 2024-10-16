import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import solutions from './data/solutions';

function App() {
  const [solution, setSolution] = useState(null);
  const [clue, setClue] = useState(null);
  const [split, setSplit] = useState(null);
  const [filterByCategory, setFilterByCategory] = useState('All');

  const filteredSolutions = filterByCategory === 'All'
  ? solutions 
  : solutions.filter((solution) => solution.category === filterByCategory);

  useEffect(() => {
    const randomSolution = filteredSolutions[Math.floor(Math.random() * filteredSolutions.length)];
console.log(randomSolution.category)
    setSolution(randomSolution.word);
    setClue(randomSolution.clue);
    setSplit(JSON.parse(randomSolution.split));
  }, [filterByCategory, filteredSolutions, setSolution, setClue, setSplit]);


  return (
    <div className="App">
      <div className='title'>
      <h1 className='title-header'>STRAMASH!</h1>
      <p>It's not <i>not</i> Scottish Football Wordle</p>
      </div>

      {solution && split && <Wordle 
      solution={solution} 
      clue={clue} 
      split={split}
      filterByCategory={filterByCategory}
      setFilterByCategory={setFilterByCategory} />}
    </div>
  )
}

export default App;