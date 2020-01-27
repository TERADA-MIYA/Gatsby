import React from 'react'
import Icon from '../components/Icon'
import '../styles/Footer.css'

const date = new Date()
const year = date.getFullYear()

function Footer() {
    return (
        <div className='site-footer' style={{ backgroundColor: 'rebeccapurple' }}>
            <div className='wrapper-5-5'>
                <div>블로그 설명</div>
                <div style={{ textAlign: 'right' }}>
                    <a href='https://github.com/TERADA-MIYA' alt="Terada's github blog" ><Icon name='github' w='24' h='24' /></a>&nbsp;
                    <a href='mailto:terada.syun.kim' alt="Mail to Terada" ><Icon name='mail' w='24' h='24' /></a>&nbsp;
                    <a href='https://www.instagram.com/matsunagasyun/' alt="Terada's instagram" ><Icon name='instagram' w='24' h='24' /></a>&nbsp;
                    <a href='https://twitter.com/DanteTerada' alt="Terada's twitter" ><Icon name='twitter' w='24' h='24' /></a>&nbsp;
                    <div>
                        <span className='text-muted'>{year} All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer