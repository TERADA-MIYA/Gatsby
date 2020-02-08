import React from 'react'
import { Image, Card } from 'react-bootstrap'
import Name from '../../static/icons/others/name.svg'
import Age from '../../static/icons/others/age.svg'
import Location from '../../static/icons/others/location.svg'
import Email from '../../static/icons/others/email.svg'
import Word from '../../static/icons/others/word.svg'

class AboutProfile extends React.Component {
    constructor(props) {
        super(props)
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/images/posts/header/파이썬으로 엑셀 사용하기.jpg" />
                <Card.Body>
                    <Card.Text>
                        <div className='myName'><Name width='18px' height='18px' /> 테라다 단테</div>
                        <div className='myAge'><Age width='18px' height='18px' /> 만 {(this.state.age.toString()).substring(0, 15)}세</div>
                        <div className='myLocation'><Location width='18px' height='18px' /> 후쿠오카</div>
                        <a href='mailto:terada.syun.kim@gmail.com' className='myMail'><Email width='18px' height='18px' /> terada.syun.kim@gmail.com</a>
                        <div className='myWord'> <Word width='18px' height='18px' /> 세상은 상상하는 것으로부터</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default AboutProfile
