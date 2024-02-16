import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? 'text-orange-600 border-b border-orange-500' : 'text-white'

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold ${buttonClasses}`}>{children}</p>
        </button>
  )
}

export default TabButton