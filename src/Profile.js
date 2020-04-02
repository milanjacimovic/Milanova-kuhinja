import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import { getUserById } from './services/Api'
import style from './public/components/WelcomePage.module.css'
import  './public/components/WelcomePage.css'
import { useTranslation } from 'react-i18next';
import i18n from './i18next';

const Profile = () =>{
    const { t, i18n } = useTranslation();
    const [userinfo, setUserinfo] = useState({
        username: '',
        name: '',
        surname: '',
        email: ''
    })

    let id = localStorage.getItem('id')

    useEffect(()=>{
getUserById(id).then(res=>{
    setUserinfo({
        username: res.data.user.username,
        name: res.data.user.name,
        surname:res.data.user.surname,
        email:res.data.user.email
    })
})
    },[id])

    return (<>
        <Navbar />
        <div className={style.recipe}  >
        <div style={{height:"20vh"}} className="smoric" ></div>
           <div ></div>
           <div style={{height:"5vh"}}></div>
            <h2>{t('Hello.1')}, {userinfo.username} !</h2> 
            <h2>{t('Here is your info.1')}:</h2>
    <h4>{t('Name.1')}: {userinfo.name}</h4>
    <h4>{t('Surname.1')}: {userinfo.surname}</h4>
    <h4>{t('Email.1')}: {userinfo.email}</h4>
            

            
        </div>
    </>
    )
}

export default Profile