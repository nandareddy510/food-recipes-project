import React from 'react'

const SearchDropdown = ({ value = [], handleClick }) => {

  return (
    <div className='absolute top-14 w-[220px] bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 z-50'>

      {
        value.slice(0,5).map((item) => {
          return (
            <div
              key={item.idMeal}
              onClick={() => handleClick(item.strMeal)}
              className='px-4 py-3 cursor-pointer hover:bg-orange-50 transition-all duration-200 border-b border-gray-100 last:border-none'
            >
              <h1 className='text-sm font-medium text-gray-700'>
                {item.strMeal}
              </h1>
            </div>
          )
        })
      }

    </div>
  )
}

export default SearchDropdown