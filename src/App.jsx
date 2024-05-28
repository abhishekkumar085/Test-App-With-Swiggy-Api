// import React, { useEffect, useState } from "react";
// import RestaurantsCard from "./components/RestaurantsCard";
// import restaurantsData from "./constant";
// import LoadingSkeleton from "./components/LoadingSkeleton";

// function App() {
//   const [allrestaurants, setAllRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const handleSearch = (searchText, allrestaurants) => {
//     const filterData = allrestaurants.filter((item) =>
//       item?.info?.name.toLowerCase().includes(searchText)
//     );
//     return filterData;
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await fetch(
//         "https://www.swiggy.com/mapi/homepage/getCards?lat=24.5708183&lng=73.70609820000001"
//       );
//       const jsonData = await response.json();
//       console.log(jsonData.data, "dataaaa");
//       console.log(
//         jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle
//           .restaurants,
//         "data"
//       );
//       const fetchedRestaurants =
//         jsonData?.data?.success?.cards[4]?.gridWidget?.gridElements
//           ?.infoWithStyle?.restaurants;
//       setFilteredRestaurant(fetchedRestaurants);
//       setAllRestaurants(fetchedRestaurants);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }

//   if (!allrestaurants) return null;

//   // if (filteredRestaurant?.length === 0)
//   //   return <h1>No Restaurant match your filter!!</h1>;

//   return allrestaurants?.length === 0 ? (
//     <LoadingSkeleton />
//   ) : (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           value={searchText}
//           placeholder="search"
//           onChange={(e) => setSearchText(e.target.value)}
//           className="border-2"
//         />
//         <button
//           onClick={() => {
//             const data = handleSearch(searchText, allrestaurants);
//             setFilteredRestaurant(data);
//           }}
//         >
//           Search
//         </button>
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 mt-2">
//         {filteredRestaurant &&
//           filteredRestaurant.map((restaurant, i) => (
//             <RestaurantsCard {...restaurant.info} key={restaurant.id || i} />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { lazy, Suspense } from 'react';
import Body from './components/Body';
import About from './components/About';
import Header from './components/Header';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import LoadingSkeleton from './components/LoadingSkeleton';
// import Instamart from "./components/Instamart";

/**
 * chunking
 * code spliting
 * dynamic binding
 * Lazy loading
 * On Demand Loading
 * Dynamic Import
 *
 */

const Instamart = lazy(() => import('./components/Instamart'));
// upon On demand Loading --> upon render --> suspend loading -->
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<LoadingSkeleton/>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
);
