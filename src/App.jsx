// import React, { useEffect, useState } from 'react';
// import RestaurantsCard from './components/RestaurantsCard';
// import LoadingSkeleton from './components/LoadingSkeleton';
// import restaurantsData from './constant';
// import {  toast } from 'react-toastify';

// function App() {
//   const [restaurants, setRestaurants] = useState(restaurantsData);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await fetch(
//         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING'
//       );
//       const jsonData = await response.json();
//       toast.success("Response Success 👍👍👍")
//       const fetchedRestaurants =
//         jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants;
//       setRestaurants(fetchedRestaurants);
//       setIsLoading(false); // Update loading state to false after data is fetched
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       toast.error(error,"🤡🤡🤡🤡")
//       setIsLoading(false); // Ensure loading state is set to false even in case of error
//     }
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-2">
//       {isLoading ? (
//         Array.from({ length: 10 }).map((_, index) => <LoadingSkeleton key={index} />)
//       ) : (

//         restaurants.map((restaurant,i) => (
//           <RestaurantsCard {...restaurant.info} key={restaurant.id || i} />
//         ))
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import RestaurantsCard from './components/RestaurantsCard';
import restaurantsData from './constant';

function App() {
  const [allrestaurants, setAllRestaurants] = useState(restaurantsData);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const handleSearch = (searchText, allrestaurants) => {
    const filterData=allrestaurants.filter((item) => item?.info?.name.toLowerCase().includes(searchText));
    return filterData;
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!allrestaurants) return null;

  if(filteredRestaurant?.length===0)
    return <h1>No Restaurant match your filter!!</h1>

  async function fetchData() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING'
      );
      const jsonData = await response.json();
      const fetchedRestaurants =
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setFilteredRestaurant(fetchedRestaurants);
      setAllRestaurants(fetchedRestaurants)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
          className='border-2'
        />
        <button
          onClick={() => {
            const data = handleSearch(searchText, allrestaurants);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {filteredRestaurant &&
          filteredRestaurant.map((restaurant, i) => (
            <RestaurantsCard {...restaurant.info} key={restaurant.id || i} />
          ))}
      </div>
    </div>
  );
}

export default App;

// export default App;
