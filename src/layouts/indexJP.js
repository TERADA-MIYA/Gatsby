import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHeadJP from "../components/SiteHeadJP"
import FooterJP from '../components/FooterJP'

export default ({ children }) => {
    return (
        <div>
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
        </div>
    )
}
