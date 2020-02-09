import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SiteHead from "../components/SiteHead"
import Footer from '../components/Footer'

export default ({ children }) => (
    <div>
        <div className="나중에 여기 한국 메타정보 들어감"></div>
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
    </div>
)
