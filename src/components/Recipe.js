import React from 'react'

export const Recipe = ({title, calories, image}) => {
    return (
        <>
          <h1>{title}</h1>  
          <p>Calories: {calories}</p>  
          <img src={image} title={title} />
        </>
    )
}
