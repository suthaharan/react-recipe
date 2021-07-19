import React from 'react';
import style from './Recipe.module.css';

export const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.item} key={title}>
          <h3>{title}</h3>  
          <p>Calories: {calories}</p>  
          <img src={image} title={title} alt={title}/>
          <ol>{ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}</ol>
        </div>
    )
}
