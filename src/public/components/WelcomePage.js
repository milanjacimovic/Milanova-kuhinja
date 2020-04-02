import React from 'react'
import Navbar from '../../Navbar'
import food from '../../assets/food.jpg'
import style from './WelcomePage.module.css'
import  './WelcomePage.css'

// import i18n from './i18next';
import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
    const { t, i18n } = useTranslation();
    return (<>
        <Navbar />
        <div className={style.recipe}  >
        <div style={{height:"20vh"}} className="smoric" ></div>
           <div ></div>
         
            <p style={{width:"80%", textAlign: 'center'}}><h1  >{t('Hello there, foodie!.1')}</h1>
            <h1 >{t('Da biste videli recepte, prijavite se.1')}</h1></p>
<div style={{height:"10vh"}}></div>
            
        </div>
    </>
    )
}

export default WelcomePage