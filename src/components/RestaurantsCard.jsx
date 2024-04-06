import React from 'react';

const RestaurantsCard = ({ cloudinaryImageId, cuisines, name }) => {
  return (
    <>
      <main>
        <div className="border-2 rounded-lg shadow-lg h-[300px] transform transition-transform duration-300 ease-in-out hover:scale-95">
          <div className="w-[273px] h-[182px]">
            
            <img
              className="object-cover w-full h-full"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                cloudinaryImageId
              }
              alt="Avatar images"
            />
            <div className='text-center'>
              <h1 className="pt-2 font-semibold">{name}</h1>
              <h6 className="font-normal text-zinc-600 text-xs">
                {cuisines?.join(', ')}
              </h6>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RestaurantsCard;
