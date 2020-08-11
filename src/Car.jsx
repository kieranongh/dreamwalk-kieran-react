import React from 'react'

export const Car = ({id, name, description, image_url}) => {
  return (
    <>
      <h5>{name}</h5>
      <p>{description}</p>
      <img src={image_url} />
    </>
  )
}