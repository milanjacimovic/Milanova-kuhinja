import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Spinner from './Spinner'
import style from './recipe.module.css'
import i18n from './i18next';
import { useTranslation } from 'react-i18next';
import './About.css'

function About() {
    const { t, i18n } = useTranslation();
    return (
        <Fragment>
            
            <Navbar/>
            <div className={style.recipe3}>
                <div id="Info">
                    <a data-flickr-embed="true" href="https://www.flickr.com/photos/186813935@N08/49719819071/in/dateposted-public/" 
                    title="91834803_661468138014020_6396395653202706432_n">
                        <img 
                        style={{maxWidth:"500px", paddingTop:"5%"}}
                        src="https://live.staticflickr.com/65535/49719819071_8b3a035908_w.jpg" 
                        width="90%" height="50%" alt="91834803_661468138014020_6396395653202706432_n"/></a>
                        <script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
                    <br></br>
                    <h2>{t('Ko sam ja.1')}</h2>
                    <p>{t('I am Milan Jacimovic.1')}</p>
                    <p>Web developer</p>
                    <p>{t('Manager.1')}</p>
                    <p>{t('Gamer.1')}</p>
                    <h3>{t('Eat with me!.1')}</h3>
                    <a target="_blanc" 
                    href="https://www.linkedin.com/in/milanjacimovic/"><img  width="10%" style={{maxWidth:"200px"}} src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG9.png" alt=""/></a>
                    <a target="_blanc" 
                    href="https://github.com/milanjacimovic"><img style={{maxWidth:"200px"}}  width="10%"  src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png" alt=""/></a>
                    <a target="_blanc" 
                    href="https://www.facebook.com/unavailablern"><img  style={{maxWidth:"200px"}} width="10%"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png" alt="" /></a>
                    <a target="_blanc" 
                    href="https://www.instagram.com/milan_jacimovic/?hl=sr"><img style={{maxWidth:"200px"}} width="10%"
                    src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png" alt="" /></a>
                </div>

            </div>
        </Fragment>
    )
}

export default About
