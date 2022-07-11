import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

const RowContainer = ({ flag,data }) => {
    console.log(data);
  return (
    <div
      className={`w-full my-12 /* bg-rowBg*/ ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 h-auto my-12 bg-cardOverly rounded-lg p-2  backdrop-blur-lg hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img whileHover={{scale:1.2}}
            src="https://firebasestorage.googleapis.com/v0/b/reactfooddeliver.appspot.com/o/Images%2F1657517176827-smartphone-mobile-device-application-programming-interface-icon-hand-and-mobile-phone-elements-55eb57cbaf7642c000154da9ef019560.png?alt=media&token=f182945e-656a-48e0-97c6-a5b1ebf12a9a"
            alt=""
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
          whileTap={{scale:0.75}}
            className="w-8 h-8 rounded-full bg-red-600
           flex items-center justify-center 
           cursor-pointer hover:shadow-md"
          >
            <MdShoppingCart className="text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-4 items-end justify-end ">
            <p className="text-textColor font-semibold md:text-lg text-base"> aasdasdasd</p>
            <p className="mt-1 text-sm text-gray-500">45 Calories</p>
            <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                    <span className="text-sm text-red-500">$</span> 5.25
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
