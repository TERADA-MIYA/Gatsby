import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'
import '../styles/404.css'

export default () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to='/'>Go To <Icon name='korea' w={18} h={18} /></Link> <Link to='/jp'>Go To <Icon name='japan' w={18} h={18} /></Link>
            </div>
        </div>
    )
}