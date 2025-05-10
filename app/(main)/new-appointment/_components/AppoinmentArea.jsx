import React from 'react'
import TherapistCard from './Therapist-Card'

const AppoinmentArea = ({data}) => {
  return (
    <div className='grid grid-col-1 lg:grid-cols-2 gap-5'>
      {data.map((therapist,index)=>(
        <TherapistCard therapist={therapist} key={index} />
      ))}
    </div>
  )
}

export default AppoinmentArea
