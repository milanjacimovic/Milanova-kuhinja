import React from 'react'
import style from './recipe.module.css'
import i18n from './i18next';
import { useTranslation } from 'react-i18next';

const Calories = ({ calories, protein, fat, carbohydrates }) => {
    const { t, i18n } = useTranslation();
   
    return (
        <div className={style.recipe} >
            <h1> {t('Total calories.1')}: {calories}</h1>
            <p>{t('Total protein.1')}: {protein} {t('grams.1')}</p>
            <p>{t('Total fat.1')}: {fat} {t('grams.1')}</p>
            <p>{t('Total carbohydrates.1')}: {carbohydrates} {t('grams.1')}</p>
            
        </div>
    )
}
export default Calories

