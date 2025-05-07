import React from 'react'
import TherapistCard from './Therapist-Card'

const AppoinmentArea = ({data}) => {
  return (
    <div>
      {data.map((therapist,index)=>(
        <TherapistCard therapist={therapist} key={index} />
      ))}
    </div>
  )
}

export default AppoinmentArea
