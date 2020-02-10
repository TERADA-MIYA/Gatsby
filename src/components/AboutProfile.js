import React from 'react'
import AboutProfileAge from '../components/AboutProfileAge'
import { Card } from 'react-bootstrap'
import Name from '../../static/icons/others/name.svg'
import Age from '../../static/icons/others/age.svg'
import Location from '../../static/icons/others/location.svg'
import Email from '../../static/icons/others/email.svg'
import Word from '../../static/icons/others/word.svg'


export default (props) => {
    const author = props.author
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img alt={'blog author profile'} variant="top" src="/images/posts/header/파이썬으로 엑셀 사용하기.jpg" />
            <Card.Body>
                <Card.Text>
                    <dd className='myName'><Name width='18px' height='18px' /> {author.name.kr}</dd>
                    <dd className='myAge'><Age width='18px' height='18px' /> 만 <AboutProfileAge /> 세</dd>
                    <dd className='myLocation'><Location width='18px' height='18px' /> {author.location.kr}</dd>
                    <dd className='myEmail'><a href='mailto:terada.syun.kim@gmail.com' className='myMail'><Email width='18px' height='18px' /> {author.email.kr}</a></dd>
                    <dd className='myWord'> <Word width='18px' height='18px' /> {author.word.kr}</dd>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
