import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'
import solutions from './data/solutions';

function App() {
  const [solution, setSolution] = useState(null);
  const [category, setCategory] = useState(null);
  const [split, setSplit] = useState(null);
  
  // useEffect(() => {
  //   fetch('http://localhost:3001/solutions')
  //     .then(res => res.json())
  //     .then(json => {
  //       const randomSolution = json[Math.floor(Math.random()*json.length)]
  //       setSolution(randomSolution.word);
  //       setCategory(randomSolution.category);
  //       setSplit(JSON.parse(randomSolution.split))
  //     })
  // }, [setSolution, setCategory, setSplit])
  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    
    setSolution(randomSolution.word);
    setCategory(randomSolution.category);
    setSplit(JSON.parse(randomSolution.split));
  }, [setSolution, setCategory, setSplit]);

  return (
    <div className="App">
      <h1>Wordle (Scottish Football)</h1>
      {solution && split && <Wordle solution={solution} category={category} split={split} />}
    </div>
  )
}

export default App;