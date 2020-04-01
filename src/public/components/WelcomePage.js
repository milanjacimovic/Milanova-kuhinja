import React from 'react'
import Navbar from '../../Navbar'
import food from '../../assets/food.jpg'
// import i18n from './i18next';
import { useTranslation } from 'react-i18next';

const WelcomePage = ()=>{
    const { t, i18n } = useTranslation();
    return (<>
       <Navbar/>
       <div className="about-div" style={{paddingBottom:"3%"}}>
       <h1 style={{textAlign:"center"}}>{t('Hello there, foodie!.1')}</h1>
       <img src={food} alt='Hello there!' style={{width:"90%"}}/>
       </div>
       </>
    )
}

export default WelcomePage