import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { registerUser, loginUser } from './services/Api';
import { setToken, setId } from './services/Authentication';
import Navbar from './Navbar';
import i18n from './i18next';
import { useTranslation } from 'react-i18next';
import style from './recipe.module.css'
import './Signup.css'
import recipe from './assets/recipe.jpg'

const Signup = () => {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const history = useHistory()

    let user = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        email: email
    }




    const addUser = () => {
        if (password === confirmPassword) {
            registerUser(user).then(() => {
                loginUser(username, password).then(res => {
                    setToken(res.data.token);
                    setId(res.data.user.user_id)
                    console.log(res.data.token);
                    history.push('/signin')
                })
            })
        }
        else {
            alert('Passwords must be the same')
        }
    }
    return (<div>
            <Navbar/>
        <div  className={style.recipe2}>
              {/* PROVERITI DA LI VALJA OVAJ DIV ISPOD */}
              <div style={{height:"200px"}}></div>
        {/* <div style={{height:"16vh"}} ></div> */}
        <img style={{width:"20%", maxWidth:"500px", paddingTop:"3%"}} src={recipe}/>
            <form
                className="search-form"
                
                onSubmit={(e) => {
                    e.preventDefault();
                    addUser()
                }}
            >
                <div style={{paddingTop:"3%"}}>
                    <input className="form-input"
                        type="text" id="name"
                        placeholder="Name"
                        onInput={(e) => setName(e.target.value)} required
                    />
                    <input className="form-input"
                        type="text" id="surname" placeholder="Last name"
                        onInput={(e) => setSurname(e.target.value)} required
                    />
                    <input className="form-input"
                        type="text" id="username" placeholder="Username"
                        onInput={(e) => setUsername(e.target.value)} required
                    />
                    <input className="form-input"
                        type="text" id="email" placeholder="Email"
                        onInput={(e) => setEmail(e.target.value)} required
                    />
                    <input className="form-input"
                        type="text" id="password" placeholder="Password"
                        onInput={(e) => setPassword(e.target.value)} required
                    />
                    <input className="form-input"
                        type="text" id="confirm-password" placeholder="Confirm password"
                        onInput={(e) => setConfirmPassword(e.target.value)} required
                    />
                <div><button style={{marginTop:"2%", cursor: "pointer"}} className="search-button" type="submit" value="Register!">{t('Sign up.1')}</button></div>
                </div>
            </form>
               
        </div>
        </div>
    )
}

export default Signup
