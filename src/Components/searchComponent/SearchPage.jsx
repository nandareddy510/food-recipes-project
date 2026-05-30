import React from 'react'
import Pagination from '../Pagination'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  let data=useLocation()
  let searchOutput = data.state
  
  console.log(searchOutput.recipes);
  
  
  return (
    <div> 
        {
          searchOutput.recipes.length > 0 ? <Pagination container={searchOutput.recipes} /> :
          <div>
            not found
          </div>
        }
    </div>
  )
}

export default SearchPage