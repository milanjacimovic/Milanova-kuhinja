import React from 'react'
import style from './recipe.module.css'
import i18n from './i18next';
import { useTranslation } from 'react-i18next';

const MealPlanner = ({ title, readyin, servings, image }) => {
    const { t, i18n } = useTranslation();
    const imgsrc = 'https://spoonacular.com/recipeImages/'
    return (
        <div className={style.recipe} >
            <h1> {title}</h1>
            <p>{t('Ready in.1')} {readyin} {t('minutes.1')}</p>
            <p>{t('Servings.1')}: {servings}</p>
            <img className={style.image} src={`${imgsrc}${image}`} alt="" />
        </div>
    )
}
export default MealPlanner


