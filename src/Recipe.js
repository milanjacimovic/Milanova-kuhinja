import React from 'react'
import style from './recipe.module.css'
import i18n from './i18next';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe} >
            <h1> {title}</h1>
            <ol style={{textAlign:"left"}}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{Math.round(calories)} Calories</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}
export default Recipe