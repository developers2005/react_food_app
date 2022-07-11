import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, MainContainer, CreateContainer } from "./components";
import {AnimatePresence} from 'framer-motion';
import { useStateValue } from "./components/context/StateProvider";
import { getAllFoodItems } from "./utils/firebasFunctions";
import { useEffect } from "react";
import { actionType } from "./components/context/reducer";



function App() {
  const [{foodItems},dispatch] =useStateValue();
  const fetchData = async ()=>{
    await getAllFoodItems().then((data)=>{
      // console.log(data); 
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems:data
      })
    })
  };
  useEffect(()=>
  {
    fetchData();
  },[]
  );
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-14 md:mt-20 px-4 px-4 py-4 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/createitem" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
    </AnimatePresence>
  );
}

export default App;
