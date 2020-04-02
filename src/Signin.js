import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getUsers, loginUser } from './services/Api';
import { setToken, setId } from './services/Authentication';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';
import i18n from './i18next';
import style from './recipe.module.css'
import './Signup.css'

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

    return (<div>
        <Navbar/>
        <div className={style.recipe2} >
            {/* PROVERITI DA LI VALJA OVAJ DIV ISPOD */}
            <div style={{height:"200px"}}></div>
                    <img style={{width:"20%", maxWidth:"500px", paddingTop:"3%"}} src="https://lh3.googleusercontent.com/proxy/K5MOulnnLG7DRsjvP1D1mTYXlzZmbByjPfO9wJ4Hp6D4XC7Q4pulDGA_RQ-6sfYu6A2ihTC3YaURhFQNDgKov2St4yhQn-79bgUG7O2wlR8jfJG27uPztwnM8ioeWofsbkuOmYMHRrQkJkn7scgX"/>
            
            <form className="signin-form" style={{paddingTop:"4%"}} onSubmit={(e) => { handleClick(e) }}>
                <div>
                    <input  className="form-input" type="text" id="username" placeholder="Username"
                        onInput={(e) => setUsername(e.target.value)} required
                        />
                    <input className="form-input" type="text" id="password" placeholder="Password"
                        onInput={(e) => setPassword(e.target.value)} required
                        />
                <div style={{paddingBottom:"3%", paddingTop:"2%"}}><button className="search-button" type="submit">{t('Login.1')}</button></div>
                </div>

            </form>
                        <h2>{t("Frendo, You're back!!!.1")}</h2>
        </div>
        </div>
    )
}

export {Signin}
