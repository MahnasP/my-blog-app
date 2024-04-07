import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-syacamore-600 bg-opacity-50 z-50">
      <div className="text-syacamore-700 text-2xl">
        <FaSpinner className="animate-spin mr-2" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;