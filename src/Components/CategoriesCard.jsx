import React, { useEffect, useState } from "react";
import { fetchCategories, fetchRecipes1 } from "../api/mealApi";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../Pages/Loader";
import { FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiMedalDuotone } from "react-icons/pi";
const CategoriesCard = () => {
  let name = useParams();

  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    let fetching = async () => {
      try {
        setLoading(true);
        let response = await fetchRecipes1(name.item);
        setItems(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetching();
  }, []);
  console.log(items);
  
  return (
    <div className="min-h-screen bg-[#faf8f6] px-6 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          {name.item} Recipes
        </h1>

        <p className="text-gray-500 mt-2">
          Discover and cook delicious recipes from around the world.
        </p>
      </div>

      {!loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            return (
              <NavLink state={item} to={`/categories/${item.strCategory}/${item.idMeal}`}>
                <div
                  key={item.idMeal}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border border-gray-100"
                >
                  {/* IMAGE */}

                  <div className="relative">
                    <img
                      className="h-[230px] w-full object-cover"
                      src={item.strMealThumb}
                      alt={item.idMeal}
                    />

                    <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md">
                      🤍
                    </button>
                  </div>

                  {/* CONTENT */}

                  <div className="p-5">
                    {/* TITLE */}

                    <h1 className="text-[20px] font-semibold text-gray-800">
                      {item.strMeal}
                    </h1>

                    {/* RATING */}

                    <div className="flex items-center gap-5 mt-3 text-gray-500 text-sm">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" />

                        <span>
                          {(item.rating = (Math.random() * 2 + 3).toFixed(1))}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <IoMdTime className="text-gray-400" />

                        <span>
                          {
                            (item.cookTime = `${Math.floor(Math.random() * 40 + 10)}`)
                          }
                          mins
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <PiMedalDuotone className="text-gray-400" />

                        <span>
                          {
                            (item.difficulty = ["Easy", "Medium", "Hard"][
                              Math.floor(Math.random() * 3)
                            ])
                          }
                        </span>
                      </div>
                    </div>

                    {/* TAGS */}

                    <div className="flex flex-wrap gap-2 mt-5">
                      <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-500 text-xs font-medium">
                        {item.strCategory}
                      </span>

                      {item?.strTags?.split(",").slice(0,2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CategoriesCard;
