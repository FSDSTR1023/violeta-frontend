import React, { useState } from 'react'


export const Search = () => {
    const [input, setInput] = useState("")
    const fetchData = (value) => {
        
    }
  return (
    <div className='input-wrapper'>
        <br />
        <input className="bg-white w-3/4" placeholder="Escribe aquí" value={input} onChange={(e) => setInput(e.target.value)}/>
    </div>
  )
}
