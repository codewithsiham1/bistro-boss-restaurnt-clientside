// import { useState } from "react";
// import Orderbanner from "./Orderbanner/Orderbanner";
// import UseMenu from "../../Hooks/UseMenu";
// import Foodcard from "../../Components/Foodcard/Foodcard";
// import { useParams } from "react-router-dom";

// const Orderfood = () => {
//   const [tabindex, setTabIndex] = useState(inttialindex);
//   const tabs = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
//   const [menu] = UseMenu();
// const {category}=useParams();
// const inttialindex=tabs.indexOf(category)
// console.log(category)
//   // Category-wise filtering
//   const categories = {
//     Salad: menu.filter((item) => item.category === "salad"),
//     Pizza: menu.filter((item) => item.category === "pizza"),
//     Soup: menu.filter((item) => item.category === "soup"),
//     Dessert: menu.filter((item) => item.category === "dessert"),
//     Drinks: menu.filter((item) => item.category === "drinks"),
//   };

//   const currentItems = categories[tabs[tabindex]] || [];

//   return (
//     <div className="px-4 md:px-10">
//       <Orderbanner />

//       {/* Tab List */}
//       <div role="tablist" className="flex justify-center flex-wrap gap-4 mt-10 border-b-2 border-gray-300 pb-2">
//         {tabs.map((tab, index) => (
//           <button
//             key={index}
//             onClick={() => setTabIndex(index)}
//             className={`text-lg font-medium pb-2 transition-colors duration-300 ${
//               tabindex === index
//                 ? "border-b-4 border-[#F97316] text-[#F97316]" // Active style
//                 : "text-gray-500 hover:text-[#F97316]"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Active Tab Content */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
//         {currentItems.map((item) => (
//           <Foodcard key={item._id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orderfood;

import { useState } from "react";
import Orderbanner from "./Orderbanner/Orderbanner";
import UseMenu from "../../Hooks/UseMenu";
import Foodcard from "../../Components/Foodcard/Foodcard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Orderfood = () => {
  const tabs = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];
  const { category } = useParams();

  // initial index based on url param category (case insensitive)
  const initialIndex = tabs.findIndex(tab => tab.toLowerCase() === category?.toLowerCase());

  const [tabindex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
  const [menu] = UseMenu();

  // Category-wise filtering
  const categories = {
    Salad: menu.filter((item) => item.category === "salad"),
    Pizza: menu.filter((item) => item.category === "pizza"),
    Soup: menu.filter((item) => item.category === "soup"),
    Dessert: menu.filter((item) => item.category === "dessert"),
    Drinks: menu.filter((item) => item.category === "drinks"),
  };

  const currentItems = categories[tabs[tabindex]] || [];

  return (
    <div className="px-4 md:px-10">
             <Helmet>
                <title>Bistro Boss |Order Food</title>
              </Helmet>
      <Orderbanner />

      {/* Tab List */}
      <div role="tablist" className="flex justify-center flex-wrap gap-4 mt-10 border-b-2 border-gray-300 pb-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setTabIndex(index)}
            className={`text-lg font-medium pb-2 transition-colors duration-300 ${
              tabindex === index
                ? "border-b-4 border-[#F97316] text-[#F97316]"
                : "text-gray-500 hover:text-[#F97316]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 justify-items-center">
        {currentItems.map((item) => (
          <Foodcard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Orderfood;


