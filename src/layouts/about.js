import React from 'react'
import '../styles/about.css'
import AboutProfile from '../components/AboutProfile'
import AboutWork from '../components/AboutWork'

class About extends React.Component {
    render() {
        return (
            <div className='about'>
                <div className='about-profile'>
                    <AboutProfile />
                </div>
                <div className='about-work'>
                    <AboutWork />
                </div>
            </div >
        )
    }
}

export default About 