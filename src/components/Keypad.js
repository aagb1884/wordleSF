import React, { useEffect, useState } from 'react';
import keyboard from '../data/letters';

export default function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    setLetters(keyboard)
  })

  return (
    <div className="stram-keypad">
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
