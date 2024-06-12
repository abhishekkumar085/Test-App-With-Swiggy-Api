import React, { useEffect, useState } from 'react';
import RestaurantsCard from './RestaurantsCard';

import LoadingSkeleton from './LoadingSkeleton';
import { Link } from 'react-router-dom';
import { handleSearch } from '../utils/helper';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://www.swiggy.com/mapi/homepage/getCards?lat=24.5708183&lng=73.70609820000001'
      );
      const jsonData = await response.json();
      console.log(jsonData.data, 'dataaaa');
      // console.log(
      //   jsonData.data.success.cards[4].gridWidget.gridElements.infoWithStyle
      //     .restaurants,
      //   'data'
      // );
      const fetchedRestaurants =
        jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements
          ?.infoWithStyle?.restaurants;
      setFilteredRestaurant(fetchedRestaurants);
      setAllRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  }

  const isOnline=useOnline();
  if(!isOnline){
    return <h1> 🔴 Offline,please check your internet connection!!</h1>
  }

  if (!allrestaurants) return null;

  return allrestaurants?.length === 0 ? (
    <LoadingSkeleton />
  ) : (
    <div>
      <div className="m-2 flex gap-2">
        <input
          type="text"
          value={searchText}
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="border-2 px-3 py-1.5 rounded border-gray-500"
        />
        <button
          className="px-4 py-2 bg-gray-800 text-white"
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
          filteredRestaurant.map((restaurant) => (
            <Link
              to={'/restaurant/' + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantsCard {...restaurant.info} />{' '}
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Body;
