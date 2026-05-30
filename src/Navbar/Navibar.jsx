import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";
import Search from "../Components/searchComponent/Search";

const Navibar = () => {
  return (
    <nav
      className="
        h-[78px]
        w-[95%]
        mx-auto
        mt-5
        px-6
        bg-white
        rounded-[28px]
        shadow-sm
        border
        border-gray-100
        flex
        items-center
        justify-between
      "
    >

      {/* LOGO */}

      <div className="flex items-center gap-2">

        <img
          className="h-[42px] w-[42px] object-contain"
          src="../public/icon.jpeg"
          alt="logo"
        />

        <h1 className="text-[20px] font-bold leading-6">
          React <span className="text-[#DD4E10]">Food Recipes</span>
        </h1>

      </div>

      {/* NAV LINKS */}

      <div className="flex items-center gap-8 text-[16px] font-medium text-gray-700">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#DD4E10]"
              : "hover:text-[#DD4E10] duration-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "text-[#DD4E10]"
              : "hover:text-[#DD4E10] duration-300"
          }
        >
          Recipes
        </NavLink>

        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive
              ? "text-[#DD4E10]"
              : "hover:text-[#DD4E10] duration-300"
          }
        >
          Categories
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-[#DD4E10]"
              : "hover:text-[#DD4E10] duration-300"
          }
        >
          Favorites
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#DD4E10]"
              : "hover:text-[#DD4E10] duration-300"
          }
        >
          About
        </NavLink>

      </div>

      {/* SEARCH */}

      <Search/>


      {/* BUTTONS */}

      <div className="flex items-center gap-3">

        <NavLink to="/login">

          <button
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              border
              border-[#DD4E10]
              text-[#DD4E10]
              text-sm
              hover:bg-[#DD4E10]
              hover:text-white
              duration-300
            "
          >

            <FaUser className="text-sm" />

            Login

          </button>

        </NavLink>

        <NavLink to="/register">

          <button
            className="
              px-4
              py-2
              rounded-xl
              bg-[#DD4E10]
              text-white
              text-sm
              hover:bg-[#c7420d]
              duration-300
              shadow-sm
            "
          >
            Register
          </button>

        </NavLink>

      </div>

    </nav>
  );
};

export default Navibar;