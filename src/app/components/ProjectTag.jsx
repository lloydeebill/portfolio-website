import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-orange-600 hover:bg-orange-700"
    : "text-white border-gray-500 hover:border-white hover:bg-gray-700";

  return (
    <button 
        className={`${buttonStyles} rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-xl cursor-pointer transition-colors duration-150`}
        onClick={() => onClick(name)}
    >
        {name}
    </button>
  );
};

export default ProjectTag;
