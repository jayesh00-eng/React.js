import React from 'react';

export default function Dispaly({notes}) {
  return (
    <div className='text-center'>
      <div className='text-center'>Display:</div>
      <div >
        {notes.map((note, index) => (
          <p key={index} >{note}</p>
        ))}
      </div>
    </div>
    
  )
}
