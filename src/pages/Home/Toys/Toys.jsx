import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Toy from "../Toy/Toy";

const Toys = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleTabSelect = (index) => {
    setActiveTab(index);
    // Perform any additional logic or actions here
  };
  return (
    <div className="py-5 bg-[#FFAAC9]">
      <h1 className="text-center font-extrabold text-3xl mt-4">
        Shop By Category
      </h1>
      <Tabs onSelect={handleTabSelect} selectedIndex={activeTab}>
        <TabList className="flex justify-center items-center mt-10">
          <Tab className="font-semibold mr-4 py-2 px-4 ">Bear</Tab>
          <Tab className="font-semibold mr-4 py-2 px-4">Horse</Tab>
          <Tab className="font-semibold py-2 px-4">Dogs</Tab>
        </TabList>

        <TabPanel>
          <p>Content 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content 3</p>
        </TabPanel>
      </Tabs>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 py-2 md:ml-4">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default Toys;
