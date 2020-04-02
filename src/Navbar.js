import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { isLoggedIn } from './services/Authentication'
import { useTranslation } from 'react-i18next';
import i18n from './i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    if (isLoggedIn()) {
        return (<div>
            <nav className="navbar bg-primary menu" >

                <ul>
                    <p>
                        <Link to='/home'>{t('Home.1')}</Link>

                    </p>
                    <p>
                        <Link to='/about'>{t('About.1')}</Link>
                    </p>

                    <p>
                        <Link to='/signout'>{t('Sign out.1')}</Link>
                    </p>
                </ul>

            </nav>
        </div>
        )
    }
    else {
        return (<div className="razmak">
            <nav className="navbar bg-primary" >
                
                <ul>
                    <p>
                        <Link to='/'>{t('Welcome.1')}</Link>

                    </p>
                    <p>
                        <Link to='/about'>{t('About.1')}</Link>
                    </p>

                    <p>
                        <Link to='/signin'>{t('Sign in.1')}</Link>
                    </p>
                    <p>
                        <Link to='/signup'>{t('Sign up.1')}</Link>
                    </p>
                </ul>

            </nav>
            
        </div>

        )
    }

}


export default Navbar