import React from 'react'
import Python from '../icons/python.svg'
import Github from '../icons/github.svg'
import Mail from '../icons/mail.svg'
import Instagram from '../icons/instagram.svg'
import Twitter from '../icons/twitter.svg'

const Icon = (props) => {
    return (
        getIcon(props.name, props.w, props.h)
    )
}


function getIcon(name, w, h) {
    switch (name) {
        case 'twitter':
            return (
                <Twitter width={`${w}`} height={`${h}`} />
            )
        case 'instagram':
            return (
                <Instagram width={`${w}`} height={`${h}`} />
            )
        case 'mail':
            return (
                <Mail width={`${w}`} height={`${h}`} />
            )
        case 'github':
            return (
                <Github width={`${w}`} height={`${h}`} />
            )
        case 'python':
            return (
                <Python width={`${w}`} height={`${h}`} />
            )
        default:
            return (
                <Python width={`${w}`} height={`${h}`} />
            )
    }
}

export default Icon