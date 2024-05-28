import React from "react";

const LoadingSkeleton = () => {
  return (
    <main className="flex flex-wrap gap-2 mt-2  ">
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div
            key={i}
            className="border-2 rounded-lg shadow-lg h-[300px] animate-pulse "
          >
            <div className="w-[273px] h-[282px] bg-gray-300"></div>
          </div>
        ))}
    </main>
  );
};

export default LoadingSkeleton;
