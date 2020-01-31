import React, { Fragment } from 'react'
import Python from '../icons/python.svg'
import Github from '../icons/github.svg'
import Mail from '../icons/mail.svg'
import Instagram from '../icons/instagram.svg'
import Twitter from '../icons/twitter.svg'
import Excel from '../icons/excel.svg'
import Javascript from '../icons/javascript.svg'
import Jquery from '../icons/jquery.svg'
import Css from '../icons/css.svg'
import Html from '../icons/html.svg'
import Jekyll from '../icons/jekyll.svg'
import Google from '../icons/google.svg'
import Markdown from '../icons/markdown.svg'
import Language from '../icons/language.svg'
import Rreact from '../icons/Rreact.svg'
import Webhacking from '../icons/webhacking.svg'
import Algorithm from '../icons/algorithm.svg'
import Php from '../icons/php.svg'
import Mysql from '../icons/mysql.svg'

const Icon = (props) => {
    return (
        getIcon(props.name, props.w, props.h)
    )
}

function getIcon(name, w, h) {
    switch (name.toLowerCase()) {
        case 'mysql':
            return (
                <Mysql width={`${w}`} height={`${h}`} />
            )
        case 'php':
            return (
                <Php width={`${w}`} height={`${h}`} />
            )
        case 'algorithm':
            return (
                <Algorithm width={`${w}`} height={`${h}`} />
            )
        case 'webhacking':
            return (
                <Webhacking width={`${w}`} height={`${h}`} />
            )
        case 'react':
            return (
                <Rreact width={`${w}`} height={`${h}`} />
            )
        case 'language':
            return (
                <Language width={`${w}`} height={`${h}`} />
            )
        case 'markdown':
            return (
                <Markdown width={`${w}`} height={`${h}`} />
            )
        case 'google':
            return (
                <Google width={`${w}`} height={`${h}`} />
            )
        case 'jekyll':
            return (
                <Jekyll width={`${w}`} height={`${h}`} />
            )
        case 'html':
            return (
                <Html width={`${w}`} height={`${h}`} />
            )
        case 'css':
            return (
                <Css width={`${w}`} height={`${h}`} />
            )
        case 'jquery':
            return (
                <Jquery width={`${w}`} height={`${h}`} />
            )
        case 'javascript':
            return (
                <Javascript width={`${w}`} height={`${h}`} />
            )
        case 'excel':
            return (
                <Excel width={`${w}`} height={`${h}`} />
            )
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
                <Fragment></Fragment>
            )
    }
}

export default Icon