import React from 'react'
import DashNav from './DashNav'
import DashDisplay from './DashDisplay'


export default function Dashboard() {
  return (
    <div className='lg:h-screen w-full lg:overflow-hidden overflow-y-auto font-poppins'>
      <DashNav/>
      <DashDisplay/>
    </div>
  )
}
