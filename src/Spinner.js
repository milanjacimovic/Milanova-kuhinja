import React, { Fragment } from 'react'
import spinner from './assets/spinner.gif'
import i18n from './i18next';

const Spinner = () =>
    <Fragment>
        <img src={spinner}
            alt="Loading..."
            style={{
                width: "700px",
                margin: "auto",
                display: "block"
            }}
        ></img>
    </Fragment>
    
export default Spinner
