import React from 'react'
import Icon from '../components/Icon'
import '../styles/Footer.css'

const date = new Date()
const year = date.getFullYear()

function Footer() {
    return (
        <div className='site-footer' style={{ backgroundColor: 'rebeccapurple' }}>
            <div className='site-footer-head'>
                - Powered by -<br />
                <Icon name={'gatsby'} w={36} h={36} /> Gatsby<br />
                <Icon name={'netlify'} w={36} h={36} /> Netlify <br />
            </div>
            <div className='site-footer-body' >
                <a href='https://github.com/TERADA-MIYA' alt="Terada's github blog" ><Icon name='github' w='24' h='24' /></a>&nbsp;
                    <a href='mailto:terada.syun.kim' alt="Mail to Terada" ><Icon name='mail' w='24' h='24' /></a>&nbsp;
                    <a href='https://www.instagram.com/matsunagasyun/' alt="Terada's instagram" ><Icon name='instagram' w='24' h='24' /></a>&nbsp;
                    <a href='https://twitter.com/DanteTerada' alt="Terada's twitter" ><Icon name='twitter' w='24' h='24' /></a>&nbsp;
                    <div>
                    <span className='text-muted'>{year} All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer