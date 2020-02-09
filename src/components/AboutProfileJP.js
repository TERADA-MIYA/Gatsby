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
            <Card.Img variant="top" src="/images/posts/header/파이썬으로 엑셀 사용하기.jpg" />
            <Card.Body>
                <Card.Text>
                    <dd className='myName'><Name width='18px' height='18px' /> {author.name}</dd>
                    <dd className='myAge'><Age width='18px' height='18px' /> <AboutProfileAge />歳</dd>
                    <dd className='myLocation'><Location width='18px' height='18px' /> {author.location}</dd>
                    <dd className='myEmail'><a href='mailto:terada.syun.kim@gmail.com' className='myMail'><Email width='18px' height='18px' /> {author.email}</a></dd>
                    <dd className='myWord'> <Word width='18px' height='18px' /> {author.word}</dd>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
