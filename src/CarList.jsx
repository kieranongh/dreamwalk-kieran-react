import React, { useState, useEffect } from 'react'

import { Car } from './Car'

import css from './CarList.css'

export const CarList = ({title, carList}) => {

  return (
    <div className="container">
      <h4>{title}</h4>
      {carList.map(car => (<div key={car.id}><Car {...car} /></div>))}
    </div>
  )
}