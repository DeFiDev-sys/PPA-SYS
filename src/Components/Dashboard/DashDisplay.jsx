import React, { useState } from 'react'
import DropDown from '../../utils/DropDown'

export default function DashDisplay() {
    const [selectedValue,setSelectedValue]=useState({
        1:null,
        2:null,
        3:null,
        4:null,
        5:null
    });
    const [displayAverage, setDispayAverageData] = useState('');
    const handleData = (data,id) =>{
        setSelectedValue((prev)=>({
            ...prev,
            [id]:parseInt(data)
        }));
    }
    const calculateAve =()=>{
        const values = Object.values(selectedValue).filter((val)=>val !== null);//select all values that are not empty and store it in values
        if(values.lenght >= 0 || values.length <= 5){
            const sum =values.reduce((acc,curr) =>acc + curr, 0)
            return sum / 5;
        }
        return null;
    }
    const submitData =(e)=>{
        e.preventDefault();
     const average = calculateAve();
     console.log(average)
     setDispayAverageData(average);

     setTimeout(()=>{
        setDispayAverageData('')
     },10000)
    }
    
  return (
  <>
  <div className='flex flex-col justify-between gap-5 lg:gap-x-10 p-10 lg:flex-row lg:p-28 h-full '>
    {/* form data div */}
    <div className='flex  items-center justify-center lg:w-[60%]'>
    <form className='flex flex-col gap-y-5 items-center'>
        {/* container */}
        <div className='flex flex-col gap-y-10'>
        <div className='flex gap-x-[20px] justify-between'>
            <label htmlFor="1.Mentorship & Guidance">Mentorship & Guidance</label>
            <DropDown onDataChange={(data)=>handleData(data,1)}/>
        </div>
        <div className='flex gap-x-[20px] justify-between'>
            <label htmlFor="2.Mentorship & Guidance">Resource Availability</label>
            <DropDown onDataChange={(data)=>handleData(data,2)}/>
        </div>

        <div className='flex gap-x-[20px] justify-between'>
            <label htmlFor="3.Mentorship & Guidance">Workplace Safety</label>
            <DropDown onDataChange={(data)=>handleData(data,3)}/>
        </div>

        <div className='flex gap-x-[20px] justify-between'>
            <label htmlFor="4.Mentorship & Guidance">Skill Matching</label>
            <DropDown onDataChange={(data)=>handleData(data,4)}/>
        </div>

        <div className='flex gap-x-[0px] justify-between'>
            <label htmlFor="5.Mentorship & Guidance">Skill Building</label>
            <DropDown onDataChange={(data)=>handleData(data,5)}/>
        </div>
        </div>
        
        {/* submit btn */}
        <button type='submit' onClick={submitData} 
        className='w-[30%] lg:ml-[50%] mt-5 h-10 border-2 rounded-lg hover:bg-green-600 bg-green-200'
        >
            Submit
        </button>
    </form>
    </div>
    {/* display result to dashboard */}
    <div className='flex flex-grow items-center justify-center lg:w-[40%]'>
        <span className='border-2 border-black rounded-full p-[25%]'>
            {
                displayAverage !== null //if the display render is not empty show the ave score.
                ?
                `Average PPA Score : ${displayAverage}%`
                :
                ''
            }
        </span>
    </div>
  </div>
    
  </>
  )
}
