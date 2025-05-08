import React from 'react'
import { therapists } from '@/data/therapist'
import AppoinmentArea from './_components/AppoinmentArea'
const page = () => {
  return (
    <div>
        <h3 className='text-5xl md:text-6xl lg:text-7xl'>Title</h3>
      <AppoinmentArea data={therapists}/>
    </div>
  )
}

export default page
