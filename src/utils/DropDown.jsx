/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { PercentageScore } from './Data'

export default function DropDown({onDataChange}) {
    const [isValue,setIsValue] = useState('');
    const handleFunction =(value)=>{
        const percentData = PercentageScore.find((data)=>data===parseInt(value));
        setIsValue(percentData);
        onDataChange(percentData)
    }
  return (
    <select name="" id=""
    className='border-2 w-[200px] outline-none'
    onChange={(e)=>{handleFunction(e.target.value)
    }}
    >
        <option value="" disabled defaultChecked>
            <em>Select. . .</em>
        </option>
        {
            PercentageScore.map((data)=>(
                <option value={data} key={data}>{data}</option>
            ))
        }
    </select>
  )
}
