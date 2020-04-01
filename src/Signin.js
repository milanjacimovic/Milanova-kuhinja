import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getUsers, loginUser } from './services/Api';
import { setToken, setId } from './services/Authentication';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';


const Signin = () => {
    const { t, i18n } = useTranslation();
    
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault()
        loginUser(username, password).then(res => {
            setToken(res.data.token);
            setId(res.data.user.user_id);
          
            
            history.push('/home')
        })

    }

    return (
        <div>
        <Navbar/>
            <form className="search-form" onSubmit={(e) => { handleClick(e) }}>
                <div>
                    <input className="form-input" type="text" id="username" placeholder="Username"
                        onInput={(e) => setUsername(e.target.value)} required
                    />
                    <input className="form-input" type="text" id="password" placeholder="Password"
                        onInput={(e) => setPassword(e.target.value)} required
                    />
                </div>
                <button className="search-button" type="submit">{t('Login.1')}</button>

            </form>
            <img style={{width:"50%"}} src="https://blog.lifesabundance.com/pics/Happy-labrador-puppy.jpg"/>
            <h2>{t("Frendo, You're back!!!.1")}</h2>
        </div>
    )
}

export {Signin}
