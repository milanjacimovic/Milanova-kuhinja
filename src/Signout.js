import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { logoutUser } from './services/Authentication';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import style from './recipe.module.css'
import recipe from './assets/recipe.jpg'

const Signout = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory()
    const signoutUser = () => {
        logoutUser()

        history.push('/signin')
    }
    return (<div>
            <Navbar />
        <div className={style.recipe2}>
              {/* PROVERITI DA LI VALJA OVAJ DIV ISPOD */}
              <div style={{height:"200px"}}></div>
            
        <img style={{width:"20%", maxWidth:"500px", paddingTop:"3%"}} src={recipe}/>
                    <h1>{t('Are you sure?.1')}  &nbsp;</h1>
            
            <div>  &nbsp;</div>
            <button style={{cursor: "pointer"}} className="search-button" onClick={() => {
                signoutUser()
            }}>{t('Log out.1')}</button>
        </div>
        </div>
    )
}
export default Signout