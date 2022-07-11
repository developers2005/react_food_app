import React, {  useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { catergories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "./context/StateProvider";
const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");

  const [{ foodItems }, dispatch] = useStateValue();

  return (
    <section className="w-full my-6 " id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p
          className="text-2xl font-semibold capitalize relative text-headingColor 
          before:absolute before:rounded-lg 
          before:content before:w-32 before:h-1 before:-bottom-2
          before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:bg-orange-500
          transition-all ease-in-out duration-100 mr-auto"
        >
          Our hot dishes
        </p>
        <div
          className="w-full flex items-center justify-start lg:justify-center
           gap-8 py-6 overflow-x-scroll scrollbar-none"
        >
          {catergories &&
            catergories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParmName ? "bg-cartNumBg" : "bg-white"
                }  w-24 min-w-[94px] h-28 cursor-pointer
                rounded-lg drop-shadow-xl flex flex-col items-center justify-center
               hover:bg-red-600`}
                onClick={() => setFilter(category.urlParmName)}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParmName
                      ? "bg-white"
                      : "bg-cartNumBg"
                  } group-hover:bg-white flex items-center justify-center shadow-lg`}
                >
                  <IoFastFood
                    className={` ${
                      filter === category.urlParmName
                        ? "text-textColor"
                        : "text-card"
                    } text-lg group-hover:text-textColor`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParmName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white mt-2`}
                >
                  {" "}
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.Category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
