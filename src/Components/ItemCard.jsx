import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { PiMedalDuotone } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { PiChefHatThin } from "react-icons/pi";
import { BiWorld } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ItemCard = () => {
  let { id } = useParams();
  let item = useLocation();
  let [favorate,setFavarate] = useState(false)
const [favorites, setFavorites] = useLocalStorage("favorites", []);
  let [serving, setserving] = useState(0);
  console.log(item.state);
  const {idMeal,rating,strArea,strCategory,strCountry,strInstructions, strMeal, strMealThumb, strSource, strTags, strYoutube, strIngredient1,strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
  strMeasure1,
  strMeasure2,
  strMeasure3,
  strMeasure4,
  strMeasure5
  } = item.state;
  console.log(strIngredient1);
  const handleFav = () => {
  const exists = favorites.some(
    (recipe) => recipe.idMeal === item.state.idMeal
  );
  if (exists) {
    const updated = favorites.filter(
      (recipe) => recipe.idMeal !== item.state.idMeal
    );
    setFavorites(updated);
    setFavarate(false);
  } else {
    setFavorites([...favorites, item.state]);
    setFavarate(true);
  }
};
useEffect(() => {
  const exists = favorites.some(
    (recipe) => recipe.idMeal === item.state.idMeal
  );

  setFavarate(exists);
}, [favorites, item.state.idMeal]);
  return (
 <div className="flex flex-col gap-10">
     <div className="flex gap-10">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border border-gray-100 w-[25vw]">
        <div className="relative">
          <img
            className="h-[230px] w-full object-cover"
            src={strMealThumb}
            alt={idMeal}
          />

          <button onClick={handleFav} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-gray-600 flex justify-center items-center shadow-md">
            <FaHeart className={favorate? " text-red-500" : "text-white"} />
          </button>
        </div>
        {/* CONTENT */}
        <div className="p-5">
          {/* TITLE */}
          <h1 className="text-[20px] font-semibold text-gray-800">{strMeal}</h1>
          <div className="flex items-center gap-5 mt-3 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />

              <span>{item.state.rating}</span>
            </div>

            <div className="flex items-center gap-1">
              <IoMdTime className="text-gray-400" />

              <span>{item.state.cookTime}</span>
            </div>

            <div className="flex items-center gap-1">
              <PiMedalDuotone className="text-gray-400" />

              <span>{item.state.difficulty}</span>
            </div>
            <div className="flex items-center gap-1">
              <MdPeopleOutline className="text-gray-400 text-[20px]" />
              <span>{serving} servings</span>
            </div>
          </div>
          <div>{strCountry}</div>

          {/* TAGS */}

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-500 text-xs font-medium">
              {strCategory}
            </span>

            {strTags?.split(",").map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <NavLink to={strYoutube}>
              <button
                className="  flex  items-center  gap-2  px-4 py-2  rounded-xl  border  border-[#DD4E10  text-[#DD4E10]  text-sm  hover:text-white hover:bg-[#DD4E10]
            "
              >
                <FaPlay /> watch
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border border-gray-100 w-[30vw] flex flex-col justify-center items-center">
        <div className="flex gap-3 w-[26vw] justify-between">
          <h1>Ingredients</h1>
          <div className="flex">
            <h1>Servings:</h1>
            <button onClick={()=>{setserving((prev)=>prev+1)}}>+</button>
            {serving}
            <button disabled={serving === 1} onClick={()=>{setserving((prev)=>prev-1)}}>-</button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center">
          {[...Array(20)].map((_, index) => {
            let ingredient = "strIngredient" + (index + 1);
            let measure = "strMeasure" + (index + 1);
            return (
              item.state[ingredient] && (
                <div key={index} className="flex gap-3 w-[26vw] justify-between">
                  <h1>{item.state[ingredient]}</h1>
                  <h1>{item.state[measure]}</h1>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border border-gray-100 w-[30vw] p-[10px]">
        <h1>Recipe Info</h1>
        <div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><PiChefHatThin /></button>
            <div>
              <h1>Categeory</h1>
              <h2>{strCategory}</h2>
            </div>
          </div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><BiWorld /></button>
            <div>
              <h1>{strCountry}</h1>
              <h2>{strArea}</h2>
            </div>
          </div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><IoMdTime /></button>
            <div>
              <h1>Pre Time</h1>
              <h2>10 min</h2>
            </div>
          </div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><IoMdTime /></button>
            <div>
              <h1>Cook Time</h1>
              <h2>{item.state.cookTime}</h2>
            </div>
          </div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><IoMdTime /></button>
            <div>
              <h1>Total Time</h1>
              <h2>40 min</h2>
            </div>
          </div>
          <div className="flex ">
            <button className=" h-10 w-10  rounded-full text-[#DD4E10] flex justify-center items-center shadow-md"><IoMdTime /></button>
            <div>
              <h1>Diffculty</h1>
              <h2>{item.state.difficulty}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
    {/* ----------------- */}
    <div>
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl duration-300 border border-gray-100 w-[90vw] p-[10px]">
          <h1>Instructions</h1>
        {strInstructions.split('.').map((line,index)=>{
          return(
            <div key={index}>
              <h1>{line}</h1>
            </div>
          )
        })}
      </div>
    </div>
 </div>
  );
};

export default ItemCard;
