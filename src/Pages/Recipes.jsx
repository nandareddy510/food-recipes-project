import React, { useEffect, useState } from "react";
import Fliter from "../Components/fliterComponent/Fliter";
import Pagination from "../Components/Pagination";
import Loader from "./Loader";

const Recipes = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const letters = "abcdefghijklmnopqrstuvwxyz".split("");
        const allMeals = [];

        for (let letter of letters) {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
          );
          const data = await response.json();
          if (data.meals) {
            allMeals.push(...data.meals);
          }
          if (allMeals.length > 150){
            break;
          }
        }
        console.log(allMeals);
        setMeals(allMeals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div>
      {
        meals.length>0? <Pagination container={meals}/>:<Loader/>
      }
    </div>
  );
};

export default Recipes;
