import React from "react";
import {
  BookOpen,
  Heart,
  ChefHat,
  UtensilsCrossed,
  Users,
  Globe,
} from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
const About = () => {
  const features = [
    {
      icon: <BookOpen size={28} />,
      title: "Explore",
      desc: "Browse thousands of recipes across various categories.",
    },
    {
      icon: <Heart size={28} />,
      title: "Save",
      desc: "Save your favorite recipes and access them anytime.",
    },
    {
      icon: <ChefHat size={28} />,
      title: "Cook",
      desc: "Simple ingredients, easy steps, and delicious results.",
    },
  ];

  const stats = [
    {
      icon: <UtensilsCrossed size={28} />,
      value: "10K+",
      label: "Delicious Recipes",
      desc: "and counting",
    },
    {
      icon: <Users size={28} />,
      value: "5K+",
      label: "Happy Users",
      desc: "joined our community",
    },
    {
      icon: <Globe size={28} />,
      value: "50+",
      label: "Cuisines",
      desc: "from around the world",
    },
    {
      icon: <Heart size={28} />,
      value: "100%",
      label: "Made with Love",
      desc: "for food lovers",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Founder & Developer",
      image: "https://i.pravatar.cc/150?img=11",
      desc: "Passionate developer who loves building beautiful web experiences.",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=5",
      desc: "Designs intuitive interfaces that make cooking more enjoyable.",
    },
    {
      name: "Michael Brown",
      role: "Content Creator",
      image: "https://i.pravatar.cc/150?img=13",
      desc: "Food enthusiast who curates and writes delicious recipes for you.",
    },
  ];

  return (
    <section className="bg-[#faf8f7] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-orange-500 font-semibold uppercase mb-3">
              About Us
            </p>

            <h1 className="text-5xl font-bold leading-tight mb-5">
              Discover. Cook.{" "}
              <span className="text-orange-500">Enjoy.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              React Food Recipes is a recipe discovery platform built for food
              lovers. Find delicious recipes from around the world and cook with
              confidence.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((item, index) => (
                <div key={index}>
                  <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-semibold text-xl mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1400"
              alt="Pasta"
              className="w-full h-[430px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="text-center mt-24">
          <p className="text-orange-500 font-semibold uppercase mb-2">
            Our Mission
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Making cooking simple and enjoyable for everyone.
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe anyone can cook great food. That's why we provide
            easy-to-follow recipes, helpful cooking tips, and a beautiful
            experience to inspire your next meal.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-orange-500">
                    {item.value}
                  </h3>

                  <p className="font-semibold text-gray-800">
                    {item.label}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-semibold uppercase mb-2">
              Our Team
            </p>

            <h2 className="text-4xl font-bold">
              Meet the people behind React Food Recipes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border shadow-sm flex gap-4 items-start"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-xl">
                    {member.name}
                  </h3>

                  <p className="text-orange-500 font-medium mb-2">
                    {member.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-6">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;