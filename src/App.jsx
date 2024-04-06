import React, { useEffect, useState } from 'react';
import RestaurantsCard from './components/RestaurantsCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import restaurantsData from './constant';
import {  toast } from 'react-toastify';


function App() {
  const [restaurants, setRestaurants] = useState(restaurantsData);
  const [isLoading, setIsLoading] = useState(true); // State to track fetch loading

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING'
      );
      const jsonData = await response.json();
      toast.success("Response Success 👍👍👍")
      const fetchedRestaurants =
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(fetchedRestaurants);
      setIsLoading(false); // Update loading state to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(error,"🤡🤡🤡🤡")
      setIsLoading(false); // Ensure loading state is set to false even in case of error
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-2">
      {isLoading ? ( 
        Array.from({ length: 10 }).map((_, index) => <LoadingSkeleton key={index} />)
      ) : (
        
        restaurants.map((restaurant,i) => (
          <RestaurantsCard {...restaurant.info} key={restaurant.id || i} />
        ))
      )}
    </div>
  );
}

// import React, { useEffect, useState } from 'react';
// import RestaurantsCard from './components/RestaurantsCard';
// import restaurantsData from './constant';

// function App() {
//   const [restaurants, setRestaurants] = useState(restaurantsData);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await fetch(
//         'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING'
//       );
//       const jsonData = await response.json();
//       const fetchedRestaurants =
//         jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants;
//       setRestaurants(fetchedRestaurants);

   
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-2">
   
//       {restaurants && restaurants.map((restaurant,i) => (
//       <RestaurantsCard {...restaurant.info} key={restaurant.id || i} />
//     ))}
//     </div>
//   );
// }

// export default App;

export default App;






