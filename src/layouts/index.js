import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHead from "../components/SiteHead"
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'

export default ({ children }) => (
    <>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google-site-verification" content="jrx0iNmW3RB-iO8oyy8yI2Nws-0p9Dqy9DlD_UxKUiQ" />
        </Helmet>
        <div className="viewport">
            <div className="viewport-top">
                <SiteHead />
            </div>
            <div className="viewport-middle" >
                {children}
            </div>
            <div className="viewport-bottom">
                <Footer />
            </div>
        </div>
    </>
)
