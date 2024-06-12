import React from 'react';
import { useParams } from 'react-router-dom';
import { CLOUDINIRY_IMAGE_ID } from '../constant';
import LoadingSkeleton from './LoadingSkeleton';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restwithId, restaurantData } = useRestaurant(id);
  const dispatch = useDispatch();

  console.log('Restaurant Data:', restaurantData);
  console.log('Rest with Id:', restwithId);

  if (!restaurantData || restwithId === undefined) {
    return <LoadingSkeleton />;
  }

  // if (restwithId.length === 0) {
  //   return <div>No menu items found</div>;
  // }

  // const handleAdddItem = () => {
  //   dispatch(addItem('gggg'));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-around m-4">
      <div>
        <h1 className="text-center font-semibold border-b-2 border-black text-lg">
          {restaurantData.name}
        </h1>
        <div className="flex justify-center flex-col items-center">
          <div className="w-[60%] mt-4">
            <img
              src={CLOUDINIRY_IMAGE_ID + restaurantData.cloudinaryImageId}
              alt={restaurantData.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <h2 className="font-semibold">
              Price: &#8377; {restaurantData.costForTwo / 100}
            </h2>
            <h2 className="font-semibold">Area: {restaurantData.areaName}</h2>
            <h2 className="font-semibold">City: {restaurantData.city}</h2>
            <h2 className="font-semibold">
              Location: {restaurantData?.slugs?.restaurant}
            </h2>
          </div>
        </div>
        <button
          className="p-2 m-5 bg-green-200"
          onClick={() => handleAdddItem()}
        >
          Add items
        </button>
      </div>
      <div>
        <h1 className="font-semibold text-center border-b-2 border-black text-lg">
          Menu
        </h1>
        <ul>
          {restwithId.map((item) => (
            <li className="pt-2 list-disc text-lg" key={item.card.info.id}>
              {item.card.info.name}
              <span className="font-semibold pl-2">
                &#8377;{item.card.info.price / 100}
              </span>
              <button
                className="px-2 py-1 ml-2 bg-green-200 "
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { CLOUDINIRY_IMAGE_ID } from '../constant';
// import LoadingSkeleton from './LoadingSkeleton';
// import useRestaurant from '../utils/useRestaurant';

// const RestaurantMenu = () => {
//   const { id } = useParams();
//   const params = useParams();
//   console.log(params, 'uuuu');

//   const { restwithId, restaurantData } = useRestaurant(id);

//   return !restwithId ? (
//     <LoadingSkeleton />
//   ) : (
//     <div className="flex justify-around m-4">
//       <div>
//         <h1 className="text-center font-semibold border-b-2 border-black text-lg">
//           {restaurantData.name}
//         </h1>
//         <div className="flex justify-center flex-col items-center">
//           <div className="w-[60%] mt-4">
//             <img
//               src={CLOUDINIRY_IMAGE_ID + restaurantData.cloudinaryImageId}
//               alt="alternate text"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="mt-2">
//             <h2 className="font-semibold">
//               {' '}
//               Price :- &#8377; {restaurantData.costForTwo / 100}{' '}
//             </h2>
//             <h2 className="font-semibold">
//               {' '}
//               Area :- {restaurantData.areaName}{' '}
//             </h2>
//             <h2 className="font-semibold"> City :- {restaurantData?.city} </h2>
//             <h2 className="font-semibold">
//               {' '}
//               Location : - {restaurantData?.slugs?.restaurant}{' '}
//             </h2>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <h1 className="font-semibold text-center border-b-2 border-black text-lg">
//           Menu
//         </h1>
//         <ul>
//           {restwithId?.map((item) => (
//             <li className="pt-2 list-disc text-lg" key={item.card.info.id}>
//               {item.card.info.name}
//               <span className="font-semibold pl-2">
//                 &#8377;{item.card.info.price / 100}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;
