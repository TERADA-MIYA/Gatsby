import React from 'react'
import '../styles/about.css'

class About extends React.Component {
    constructor(props) {
        super()
        this.state = {
            age: 0
        }
    }

    componentDidMount() {
        const myBirthday = new Date(1994, 6, 17)
        setInterval(() => {
            const date = new Date()
            this.setState({
                age: (date - myBirthday) / 31536000000
            })
        }, 1)
    }
    render() {
        return (
            <div className='wrapper-3-7 height-inherit'>
                <div className='profile-background'>
                    <div className='profile-box'>
                        <div className='myName'>Terada</div>
                        <div className='myAge'>{(this.state.age.toString()).substring(0, 15)}歳</div>
                        <div className='myLocation'>福岡</div>
                        <div className='myMail'>terada.syun.kim@gmail.com</div>
                        <div className='mySNS'>SNS</div>
                    </div>
                </div>
                <div className='myWork'>
                    여기에 포트폴리오
                </div>
            </div >
        )
    }
}

export default About 