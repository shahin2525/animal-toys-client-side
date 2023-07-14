// import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Toy from "../Toy/Toy";
import HorseToys from "../CategoryToys/HorseToys";

import BearToys from "../CategoryToys/BearToys";
import DogToys from "../CategoryToys/DogToys";

const ShopCategoryTabs = () => {
  // const [toys, setToys] = useState([]);
  // console.log(toys);
  // const [activeTab, setActiveTab] = useState(0);
  // useEffect(() => {
  //   fetch(`https://animal-toys-2.vercel.app/allToys/${activeTab}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToys(data);
  //     });
  // }, [activeTab]);

  // const handleTabSelect = (index) => {
  //   setActiveTab(index);
  // Perform any additional logic or actions here
  // };
  // onSelect={handleTabSelect} selectedIndex={activeTab}
  return (
    <div className="py-5 bg-[#FFAAC9]">
      <h1 className="text-center font-extrabold text-3xl mt-4">
        Shop By Category
      </h1>

      <Tabs>
        <TabList className="flex justify-center items-center mt-10 mb-4">
          <Tab className="font-semibold mr-4 py-2 px-4 ">Bear</Tab>
          <Tab className="font-semibold mr-4 py-2 px-4">Horse</Tab>
          <Tab className="font-semibold py-2 px-4">Dogs</Tab>
        </TabList>

        <TabPanel>
          <BearToys></BearToys>
        </TabPanel>
        <TabPanel>
          <HorseToys></HorseToys>
        </TabPanel>
        <TabPanel>
          <DogToys></DogToys>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopCategoryTabs;
