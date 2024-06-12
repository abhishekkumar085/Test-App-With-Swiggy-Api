import React from 'react';

const FoodItem = ({ name, price, description, cloudinaryImageId
}) => {
  return (
    <div className="border-2 rounded-lg shadow-lg h-[300px] transform transition-transform duration-300 ease-in-out hover:scale-95">
      <div className="w-[273px] h-[182px]">
        <img
          className="object-cover w-full h-full"
          src={
            'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/' +
            cloudinaryImageId
          }
          alt="Restaurant"
        />
        <div className="text-center">
          <h1 className="pt-2 font-semibold">{name}</h1>
          <h6 className="font-normal text-zinc-600 text-xs">{description}</h6>
          <h6 className="font-normal text-zinc-600 text-xs">{price/100} /-</h6>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
