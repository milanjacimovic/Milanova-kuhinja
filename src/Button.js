import React from 'react'
import './Button.css'
import { useTranslation } from 'react-i18next';
import i18n from './i18next';

const Button = ({getRandomRecipe}) =>{
    const { t, i18n } = useTranslation();
    return (
        <div /*onTouchStart=""*/ >
  <div className="button">
    <a onClick={getRandomRecipe} href="javascript:void(0)">{t('Recipe of the day.1')}</a>
  </div>
</div>
    )
}
export default Button