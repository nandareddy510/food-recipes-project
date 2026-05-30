import React from 'react'

const Loader = () => {
  return (
    <div className=' align-middle mt-3 '>
        <div className=' border-solid border-[#f3f3f3] border-[5px] h-[50px] w-[50px] border-t-[#e52e71] animate-spin rounded-full mx-auto mb-4'>

        </div>
        <p className=' text-center '>loading Recipes</p>
    </div>
  )
}

export default Loader