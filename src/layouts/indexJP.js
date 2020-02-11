import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeadJP from "../components/SiteHeadJP"
import FooterJP from '../components/FooterJP'
import { Helmet } from 'react-helmet'

function IndexJP({ children }) {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google-site-verification" content="jrx0iNmW3RB-iO8oyy8yI2Nws-0p9Dqy9DlD_UxKUiQ" />
            </Helmet>
            <div className="나중에 여기 일본 메타정보 들어감"></div>
            <div className="viewport">
                <div className="viewport-top">
                    <SiteHeadJP />
                </div>
                <div className="viewport-middle" >
                    {children}
                </div>
                <div className="viewport-bottom">
                    <FooterJP />
                </div>
            </div>
        </>
    )
}

export default IndexJP