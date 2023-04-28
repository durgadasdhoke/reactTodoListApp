import React from 'react'

function Sticky({title,description,index,deletesticky}) {

// const stickyStyle = ;

  return (
    <div className='content'>           
        <div className='left'>
        <p><b>{index+1}. {title}</b></p>            
        <p>{description}</p>            
       </div>
        <div className='right'>
            <button className='delete' onClick={()=>deletesticky(index)}>-</button>
        </div>
    </div>
  )
}

export default Sticky;
