import React from 'react'
import Python from '../icons/python.svg'

const Icon = (props) => {
    return (
        getIcon(props.name, props.w, props.h)
    )
}


function getIcon(name, w, h) {
    switch (name) {
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