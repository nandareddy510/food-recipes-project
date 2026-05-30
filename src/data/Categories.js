import { 
  LuBeef, 
  LuDessert, 
  LuSoup 
} from "react-icons/lu";

import { 
  GiChickenOven,
  GiGoat,
  GiNoodles,
  GiPig,
  GiFishCooked,
  GiMeal,
  GiFruitBowl,
  GiHerbsBundle,
  GiCoffeeCup
} from "react-icons/gi";

const category = [
  {
    id: 1,
    name: "Beef",
    pic: "https://www.themealdb.com/images/category/beef.png",
    icon: LuBeef,
    recipes: 0,
    description:
      "Beef is the culinary name for meat from cattle, particularly skeletal muscle."
  },

  {
    id: 2,
    name: "Chicken",
    pic: "https://www.themealdb.com/images/category/chicken.png",
    icon: GiChickenOven,
    recipes: 0,
    description:
      "Chicken is one of the most common domestic animals used for meat and eggs."
  },

  {
    id: 3,
    name: "Dessert",
    pic: "https://www.themealdb.com/images/category/dessert.png",
    icon: LuDessert,
    recipes: 0,
    description:
      "Dessert is a sweet course served at the end of a meal."
  },

  {
    id: 4,
    name: "Lamb",
    pic: "https://www.themealdb.com/images/category/lamb.png",
    icon: GiMeal,
    recipes: 0,
    description:
      "Lamb is meat from young domestic sheep."
  },

  {
    id: 5,
    name: "Miscellaneous",
    pic: "https://www.themealdb.com/images/category/miscellaneous.png",
    icon: LuSoup,
    recipes: 0,
    description:
      "General foods that do not fit into another category."
  },

  {
    id: 6,
    name: "Pasta",
    pic: "https://www.themealdb.com/images/category/pasta.png",
    icon: GiNoodles,
    recipes: 0,
    description:
      "Pasta is a traditional Italian food made from wheat dough."
  },

  {
    id: 7,
    name: "Pork",
    pic: "https://www.themealdb.com/images/category/pork.png",
    icon: GiPig,
    recipes: 0,
    description:
      "Pork is meat from a domestic pig and is widely consumed worldwide."
  },

  {
    id: 8,
    name: "Seafood",
    pic: "https://www.themealdb.com/images/category/seafood.png",
    icon: GiFishCooked,
    recipes: 0,
    description:
      "Seafood includes fish, shellfish, and other edible aquatic life."
  },

  {
    id: 9,
    name: "Side",
    pic: "https://www.themealdb.com/images/category/side.png",
    icon: GiMeal,
    recipes: 0,
    description:
      "A side dish is served together with the main course."
  },

  {
    id: 10,
    name: "Starter",
    pic: "https://www.themealdb.com/images/category/starter.png",
    icon: GiFruitBowl,
    recipes: 0,
    description:
      "Starter is a dish served before the main course."
  },

  {
    id: 11,
    name: "Vegan",
    pic: "https://www.themealdb.com/images/category/vegan.png",
    icon: GiHerbsBundle,
    recipes: 0,
    description:
      "Vegan food avoids all animal products including meat and dairy."
  },

  {
    id: 12,
    name: "Vegetarian",
    pic: "https://www.themealdb.com/images/category/vegetarian.png",
    icon: GiHerbsBundle,
    recipes: 0,
    description:
      "Vegetarian food excludes meat but may include dairy and eggs."
  },

  {
    id: 13,
    name: "Breakfast",
    pic: "https://www.themealdb.com/images/category/breakfast.png",
    icon: GiCoffeeCup,
    recipes: 0,
    description:
      "Breakfast is the first meal eaten in the morning."
  },

  {
    id: 14,
    name: "Goat",
    pic: "https://www.themealdb.com/images/category/goat.png",
    icon: GiGoat,
    recipes: 0,
    description:
      "Goat meat comes from domesticated goats and is used worldwide."
  }
];

export default category;