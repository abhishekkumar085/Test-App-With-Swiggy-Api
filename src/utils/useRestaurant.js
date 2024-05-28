import { useEffect, useState } from 'react';
import { FETCH_MENU_URL } from '../constant';

const useRestaurant = (id) => {
  const [restwithId, setRestWithId] = useState(undefined); // Initialized as undefined
  const [restaurantData, setRestaurantData] = useState(undefined); // Initialized as undefined

  useEffect(() => {
    getRestroInfo();
  }, [id]);

  const getRestroInfo = async () => {
    try {
      const response = await fetch(FETCH_MENU_URL + id);
      const result = await response.json();
      
      console.log('Fetched result:', result);

      const restaurantInfo = result?.data?.cards[2]?.card?.card?.info || {};
      setRestaurantData(restaurantInfo);

      const menuItems = result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        .card?.card?.itemCards || [];
      setRestWithId(menuItems);

      console.log('Restaurant Info:', restaurantInfo);
      console.log('Menu Items:', menuItems);
    } catch (error) {
      console.log('Fetching error:', error);
      setRestaurantData({});
      setRestWithId([]);
    }
  };

  return { restwithId, restaurantData };
};

export default useRestaurant;


// import { useEffect, useState } from 'react';
// import { FETCH_MENU_URL } from '../constant';

// const useRestaurant = (id) => {
//   const [restwithId, setRestWithId] = useState([]);
//   const [restaurantData, setRestaurantData] = useState([]);
//   console.log(restaurantData);
//   console.log(restwithId);
//   console.log(
//     Object.values(restwithId).map((item) => console.log(item.card.info.name))
//   );
//   console.log(restwithId.map((item) => console.log(item.card.info.name)));

//   useEffect(() => {
//     getRestroInfo();
//   }, []);

//   const getRestroInfo = async () => {
//     try {
//       const response = await fetch(FETCH_MENU_URL + id);
//       const result = await response.json();

//       console.log(result?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId);
//       setRestaurantData(result?.data?.cards[2]?.card?.card?.info);

//       const restData =
//         result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
//           .card?.card?.itemCards;
//       setRestWithId(restData);
//     } catch (error) {
//       console.log('fetching error', error);
//     }
//   };

//   return { restwithId, restaurantData };
// };
// export default useRestaurant;





