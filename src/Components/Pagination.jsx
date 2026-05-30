import React, { useEffect, useState } from "react";
import { fetchRecipes1 } from "../api/mealApi";
import Loader from "../Pages/Loader";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiMedalDuotone } from "react-icons/pi";

const Pagination = ({container=[]}) => {
  // let [container, setContainer] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, SetCurrentpage] = useState(1);
  // useEffect(() => {
  //   let fetching = async () => {
  //     try {
  //       setLoading(true);
  //       let response = await fetch(
  //         "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  //       );
  //       let data = await response.json();
  //       setContainer(data.meals);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  //   fetching();
  // }, []);

  let handleClick = (index) => {
    SetCurrentpage(index);
  };
  let handlePrev = () => {
    SetCurrentpage((prev) => prev - 1);
  };
  let handleNext = () => {
    SetCurrentpage((prev) => prev + 1);
  };
  console.log(container);
  const itemperpage = 12;
  const totalpages = Math.ceil(container.length / itemperpage);

  const start = (currentPage - 1) * itemperpage;
  const end = start + itemperpage;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-xl font-semibold text-gray-700 mb-6">
            Showing Page {currentPage} of {totalpages} • {container.length}{" "}
            Recipes
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {container.length > 0 &&
              container.slice(start, end).map((item, index) => {
                return (
                  <NavLink
                    state={item}
                    to={`/categories/${item.strCategory}/${item.idMeal}`}
                  >
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

                        <button
                         className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white flex justify-center items-center shadow-md">
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
                              {
                                (item.rating = (Math.random() * 2 + 3).toFixed(
                                  1,
                                ))
                              }
                            </span>
                          </div>

                          <div className="flex items-center gap-1">
                            <IoMdTime className="text-gray-400" />

                            <span>
                              {
                                (item.cookTime = `${Math.floor(Math.random() * 40 + 10)} min`)
                              }
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

                          {item?.strTags?.split(",").map((tag, index) => (
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
          <div className="pagescontainer">
            {currentPage !== 1 && (
              <button className="arrow" onClick={handlePrev}>
                <FaChevronLeft />
              </button>
            )}
            {[...Array(totalpages)].map((_, index) => {
              return (
                <button
                  key={index + 1}
                  className={
                    index + 1 === currentPage ? "active" : "active inactive"
                  }
                  onClick={() => {
                    handleClick(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
            {currentPage === totalpages || totalpages === 1 ? null : (
              <button className="arrow" onClick={handleNext}>
                <FaChevronRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
