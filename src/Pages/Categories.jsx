import React, { useEffect, useState } from "react";
import { fetchCategories, fetchRecipes1 } from "../api/mealApi";
import category from "../data/Categories";
import { NavLink } from "react-router-dom";

const Categories = () => {
  let [meals, setMeal] = useState([]);
  useEffect(() => {
    setMeal(category);
  }, []);
  return (
    <div className="min-h-screen bg-[#faf7f5] px-8 py-8">
      <div className="mb-10">
        <p className="text-[#DD4E10] text-sm font-semibold tracking-wider uppercase">
          Categories
        </p>
        <h1 className="text-5xl font-bold text-black mt-2">
          Explore Recipe{" "}
          <span className="text-[#DD4E10]">Categories</span>
        </h1>
        <p className="text-gray-500 mt-3 text-lg">
          Browse recipes by your favorite categories and find the perfect dish.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
        {meals.map((item) => (
          <NavLink key={item.idMeal} to={`/categories/${item.name}`}>
            <div
            key={item.id}
            className="
          bg-white
          rounded-3xl
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          transition-all
          duration-300
          overflow-hidden
          cursor-pointer
          group
        "
          >
            <div className="h-[190px] overflow-hidden p-4 pb-0">
              <img
                src={item.pic}
                alt={item.name}
                className="
              w-full
              h-full
              object-cover
              rounded-2xl
              group-hover:scale-105
              transition-transform
              duration-500
            "
              />
            </div>
            <div className="px-5 pb-5 pt-3 relative">

              <div
                className="
              absolute
              -top-7
              left-5
              h-[60px]
              w-[60px]
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-md  flex items-center  justify-center  text-[#DD4E10] text-3xl">
                <item.icon />
              </div>
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {item.name}
                </h2>
                <p className="text-gray-500 mt-2 text-lg">
                  25 Recipes
                </p>
              </div>
            </div>
          </div>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Categories
