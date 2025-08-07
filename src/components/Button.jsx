import React from 'react'

const Button = ({btnName,handleClick,className='bg-orange-700 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded'}) => {
   
  return (
<button onClick={handleClick} className={className}>
    {btnName}
</button>
  )
}

export default Button