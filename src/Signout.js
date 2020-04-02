import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { logoutUser } from './services/Authentication';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import style from './recipe.module.css'


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
            
        <img style={{width:"20%", maxWidth:"500px", paddingTop:"3%"}} src="https://lh3.googleusercontent.com/proxy/K5MOulnnLG7DRsjvP1D1mTYXlzZmbByjPfO9wJ4Hp6D4XC7Q4pulDGA_RQ-6sfYu6A2ihTC3YaURhFQNDgKov2St4yhQn-79bgUG7O2wlR8jfJG27uPztwnM8ioeWofsbkuOmYMHRrQkJkn7scgX"/>
                    <h1>{t('Are you sure?.1')}  &nbsp;</h1>
            
            <div>  &nbsp;</div>
            <button className="search-button" onClick={() => {
                signoutUser()
            }}>{t('Log out.1')}</button>
        </div>
        </div>
    )
}
export default Signout