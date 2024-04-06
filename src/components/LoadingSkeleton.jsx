import React from 'react';

const LoadingSkeleton = () => {
  return (
    <main>
      <div className="border-2 rounded-lg shadow-lg h-[300px] animate-pulse">
        <div className="w-[273px] h-[182px]">
          {/* Placeholder for image */}
          <div className="bg-gray-200 w-full h-full"></div>
          <div className='text-center'>
            {/* Placeholder for name */}
            <div className="bg-gray-200 h-8 mb-2"></div>
            {/* Placeholder for cuisines */}
            <div className="bg-gray-200 h-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoadingSkeleton;
