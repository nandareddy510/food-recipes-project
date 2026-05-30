import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Pagination from '../Components/Pagination';

const Favorites = () => {
  let [data,setData] = useLocalStorage('favorites',[])
  console.log(data);
  
  return (
    <div>
      {data.length>0 && <Pagination container={data}/>}
    </div>
  )
}

export default Favorites