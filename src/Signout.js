import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { logoutUser } from './services/Authentication';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';


const Signout = () => {
    const { t, i18n } = useTranslation();
    const history = useHistory()
    const signoutUser = () => {
           logoutUser()
              
        history.push('/signin')
    }
    return (
        <div>
            <Navbar/>
            <div className="recipe">
            <h1>{t('Are you sure?.1')}  &nbsp;</h1>
            <img src="https://qph.fs.quoracdn.net/main-qimg-cf77b029fa912c114f16447d735324e1.webp"/>
           
            </div>
            <div>  &nbsp;</div>
            <button className="search-button" onClick={() => {
                signoutUser()
            }}>{t('Log out.1')}</button>
        </div>
    )
}
export default Signout