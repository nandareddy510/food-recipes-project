import React, { useEffect, useState } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiMedalDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";

import category from "../data/Categories";
import { fetchRecipes1 } from "../api/mealApi";

const Home = () => {
  const [meals, setMeal] = useState([]);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    setMeal(category);

    const fetching = async () => {
      const response = await fetchRecipes1();
      setDishes(response);
    };

    fetching();
  }, []);

  return (
    <div className="w-[95%] mx-auto py-6">

      {/* HERO SECTION */}

      <div
        className="h-[450px] rounded-3xl px-16 flex flex-col justify-center gap-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('/thumb.jpg')",
        }}
      >
        <h1 className="text-orange-500 text-lg font-medium">
          Good Food, Good Mood
        </h1>

        <h1 className="text-white text-6xl font-bold w-[650px] leading-[75px]">
          Discover, Cook & Enjoy
        </h1>

        <h1 className="text-gray-200 text-xl">
          Find easy and tasty recipes for every occasion.
        </h1>

        <h1 className="text-gray-200 text-xl">
          From quick meals to gourmet delights.
        </h1>

        <NavLink to="/recipes">
          <button className="mt-3 w-[220px] h-14 bg-orange-500 text-white rounded-xl flex items-center justify-center gap-3 hover:bg-orange-600 duration-300">
            Explore Recipes
            <FaArrowRight />
          </button>
        </NavLink>
      </div>

      {/* CATEGORIES */}

      <div className="mt-14">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Explore Categories
          </h1>

          <NavLink
            to="/categories"
            className="flex items-center gap-2 text-orange-500 font-medium"
          >
            View all categories
            <FaArrowRight />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

          {meals.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md duration-300"
            >
              <div className="text-4xl text-orange-500">
                <item.icon />
              </div>

              <div>
                <h1 className="font-semibold text-lg">
                  {item.name}
                </h1>

                <h1 className="text-gray-500 text-sm">
                  25 Recipes
                </h1>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* POPULAR RECIPES */}

      <div className="mt-14">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Popular Recipes
          </h1>

          <NavLink
            to="/recipes"
            className="flex items-center gap-2 text-orange-500 font-medium"
          >
            View all recipes
            <FaArrowRight />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">

          {dishes.slice(0, 6).map((item) => (
            <NavLink
              key={item.idMeal}
              className="no-underline"
              state={item}
              to={`/categories/${item.strCategory}/${item.idMeal}`}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300">

                <div className="relative">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-[220px] object-cover"
                  />

                  <button className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    🤍
                  </button>
                </div>

                <div className="p-4">

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {item.strMeal}
                  </h3>

                  <div className="flex justify-between text-sm text-gray-500">

                    <span className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      4.6
                    </span>

                    <span className="flex items-center gap-1">
                      <IoMdTime />
                      20 min
                    </span>

                    <span className="flex items-center gap-1">
                      <PiMedalDuotone />
                      Easy
                    </span>

                  </div>

                </div>

              </div>
            </NavLink>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Home;