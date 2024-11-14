import React from 'react'

export default function Row({ guess, currentGuess, length, split }) {

  if (guess) {
    return (
      <div className="stram-row past">
      {guess.map((l, i) => (
        <React.Fragment key={`${i}_frag`}>
          <div key={i} className={l.color}>{l.key}</div>
          {split.includes(i) &&
           (<div key={`${i}_seperator`} className="space-div"></div>)}
        </React.Fragment>
      ))}
    </div>
    )
  }

  if (currentGuess) {
    let letters = currentGuess.split('')

    return (
      <div className="stram-row current">
      {letters.map((letter, i) => (
        <React.Fragment key={`${i}_frag`}>
          <div key={i} className="filled">{letter}</div>
          {split.includes(i) && 
           (<div key={`${i}_seperator`} className="space-div"></div>)}
        </React.Fragment>
      ))}
      {[...Array(length - letters.length)].map((_,i) => (
        <React.Fragment key={`${i}_frag`}>
          <div key={i}></div>
          {split.includes(letters.length + i) &&
           (<div key={`${i}_seperator`} className="space-div"></div>)}
        </React.Fragment>
      ))}
    </div>
    )
  }

  return (
    <div className='stram-row'>
    {[...Array(length)].map((_, i) => {
      return (
        <React.Fragment key={`${i}_frag`}>
          <div key={i}></div>
          {split.includes(i) && 
           (<div key={`${i}_seperator`} className="space-div"></div>)}
        </React.Fragment>
      )})}
  </div>
  )
  
}
