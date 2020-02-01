import React, { Fragment } from 'react'
import Python from '../../static/icons/python.svg'
import Github from '../../static/icons/github.svg'
import Mail from '../../static/icons/mail.svg'
import Instagram from '../../static/icons/instagram.svg'
import Twitter from '../../static/icons/twitter.svg'
import Excel from '../../static/icons/excel.svg'
import Javascript from '../../static/icons/javascript.svg'
import Jquery from '../../static/icons/jquery.svg'
import Css from '../../static/icons/css.svg'
import Html from '../../static/icons/html.svg'
import Jekyll from '../../static/icons/jekyll.svg'
import Google from '../../static/icons/google.svg'
import Markdown from '../../static/icons/markdown.svg'
import Language from '../../static/icons/language.svg'
import Rreact from '../../static/icons/Rreact.svg'
import Webhacking from '../../static/icons/webhacking.svg'
import Algorithm from '../../static/icons/algorithm.svg'
import Php from '../../static/icons/php.svg'
import Mysql from '../../static/icons/mysql.svg'

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