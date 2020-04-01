import React from 'react'
import style from './recipe.module.css'

const RandomRecipe = ({ title, image, instructions, video }) => {
    return (
        <div className={style.recipe} >
            <h1> {title}</h1>
            <p>{instructions}</p>
            <a href={video} style={{}} target="_blanc"><img className={style.image} src={image} alt="" /></a>
            
        </div>
    )
}
export default RandomRecipe