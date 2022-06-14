import React, { useState } from 'react'
import useRick from '../hooks/useRick'

const LocationInfo = ({location}) => {
    
   
  

   
   console.log(location)
  return (
    <article className='location-container'>
      <h3 className='txt1'>{location?.name}</h3>
      <ul className='location-list'>
        <li className='txt2'><span>Type </span>{location?.type}</li>
        <li className='txt3'><span>Dimension </span>{location?.dimension}</li>
        <li className='txt4'><span>Population </span>{location?.residents.length}</li>
      </ul>
    </article>
  )

   
}

export default LocationInfo