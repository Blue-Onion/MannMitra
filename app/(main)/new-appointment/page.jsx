import React from 'react'
import { therapists } from '@/data/therapist'
import AppoinmentArea from './_components/AppoinmentArea'
const page = () => {
  return (
    <div>
        <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold gradient-title'>Browse & Book a Therapist</h3>
      <AppoinmentArea data={therapists}/>
    </div>
  )
}

export default page
