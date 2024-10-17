import React, { useState } from 'react'

function CountRecape() {

  const [team , setTeam] = useState(10)

  const handleAdd=()=>{
    setTeam(team +1)
    
  }
  const handleRemove=()=>{
    setTeam(team -1)


  }



  return (
    <div className='border-2 border-yellow-400 p-5 text-center font-bold'>
      
      <h1>Playes :{team} </h1>
      <button onClick={handleAdd} className='btn btn-success mt-2'>Add</button>
      <button onClick={handleRemove} className='btn btn-error'>Remove</button>
    </div>
  )
}

export default CountRecape
