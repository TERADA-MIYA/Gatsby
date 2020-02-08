import React from 'react'
import Icon from '../components/Icon'
import '../styles/Footer.css'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer'>
            <Row>
                <Col sm={5}>
                    <div className='footer-head'>
                        풍요롭고 간편한 세상을 위해 상상하는 테라다의 기술 블로그
                    </div>
                </Col>
                <Col sm={5}>
                    <div className='footer-tail'>
                        <Icon name={'gatsby'} w={36} h={36} /> Gatsby <Icon name={'netlify'} w={36} h={36} /> Netlify <Icon name={'bootstrap'} w={36} h={36} /> Bootstrap
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer