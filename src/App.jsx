import React, { useState } from 'react'
import Home from './Pages/Home'
import Mainitem from './pagination/Mainitem'
import { Toaster } from 'react-hot-toast'
import Redux from './pagination/Redux'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Navibar from './Navbar/Navibar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'
import Favorites from './Pages/Favorites'
import Categories from './Pages/Categories'
import Recipes from './Pages/Recipes'
import About from './Pages/About'
import CategoriesCard from './Components/CategoriesCard'
import itemCard from './Components/ItemCard'
import ItemCard from './Components/ItemCard'
import Pagination from './Components/Pagination'
import Search from './Components/searchComponent/Search'
import SearchPage from './Components/searchComponent/SearchPage'
import Fliter from './Components/fliterComponent/Fliter'

const App = () => {
  let route = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>, children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/categories',
          element:<Categories/>
        },
        {
          path:'/recipes',
          element:<Recipes/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/favorites',
          element:<Favorites/>
        },{
          path:'/categories/:item',
          element:<CategoriesCard/>
        },{
          path:'/categories/:item/:id',
          element:<ItemCard/>
        },{
          path:'/searchpage',
          element:<SearchPage/>
        },
        
      ]
    },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        
  ])
  return (
  <RouterProvider router={route}/>
  )
}
export default App