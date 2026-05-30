import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { fetchRecipes1 } from '../../api/mealApi';
import SearchDropdown from './SearchDropdown';
import ItemCard from '../ItemCard';
import Pagination from '../Pagination';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  let redirect = useNavigate()
    let [searchData,setSearchData] = useState('')
    let [searchOutput,setSearchOutput] = useState([])
    let [dashboard,setDashboard] = useState(false)
    let [search,setsearch] = useState(false)
    let handleChange = (e)=>{
        setSearchData(e.target.value)
        
    }
    useEffect(()=>{
        let fetching = async ()=>{
            let response = await fetchRecipes1(searchData)
            if (searchData.length>1){
                setSearchOutput(response)
                setDashboard(true)
            }else{
                setDashboard(false)
            }
        }
        fetching()
    },[searchData])
    let handleClick = (a)=>{
        setSearchData(a)
        setDashboard(false)
        redirect('/searchpage',{state:{recipes:searchOutput}})
    }
    let handleEnter = (e)=>{
      if (e.key === 'Enter'){
        redirect('/searchpage',{state:{recipes:searchOutput}})

      }
      
    }
    
  return (
   <div className="relative">
  <div className="flex items-center gap-2 bg-gray-100 px-4 py-2.5 rounded-full w-[220px]">
    <FaSearch className="text-gray-400 text-sm" />

    <input
      type="text"
      value={searchData}
      onKeyDown={handleEnter}
      onChange={handleChange}
      placeholder="Search recipes..."
      
      className="bg-transparent outline-none w-full text-sm text-gray-700"
    />
  </div>

  <div>
    {
      dashboard &&
      <SearchDropdown
        value={searchOutput}
        handleClick={handleClick}
      />
    }
    {
        // dashboard && <Pagination value={searchOutput}/>
    }
  </div>
</div>
  )
}

export default Search