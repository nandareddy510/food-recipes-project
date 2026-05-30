import React, { useState } from 'react'

const Fliter = () => {
  let [dragdown,setDragDown] = useState(false)
  return (
    <div>
      <div><button onClick={()=>{setDragDown(!dragdown)}}>Fliter</button></div>
      <div>
        {
          dragdown && <div>
            </div>
        }
      </div>
    </div>
  )
}

export default Fliter