import React from 'react'
import i18n from './i18next';
import { useTranslation } from 'react-i18next';

const Country = () => {
    const { t, i18n } = useTranslation();
    function handleClick(lang){
        i18n.changeLanguage(lang)
        }
        
    return (
        <><div className="zastave">
        <a className="zastava1" href="javascript:void(0)" onClick={()=>handleClick('en')}><img style={{width:"10%"}} src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/273_Ensign_Flag_Nation_kingdom-512.png" /></a>
        <a className="zastava2" href="javascript:void(0)" onClick={()=>handleClick('sr-SP')}><img style={{width:"10%"}} src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/228_Ensign_Flag_Nation_serbia-512.png" /></a>
        </div>
        </>
    )
}

export default Country