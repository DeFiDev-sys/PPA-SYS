import React from 'react'

const InputField =({type,placeholder,name}) => {
  return (
    <div className='flex flex-col items-center'>
        <input type={type} placeholder={placeholder} name={name} className='w-[100%] text-sx py-2 px-4 border-2 rounded-md outline-none'/>
    </div>
    
  )
}


export  {InputField}
