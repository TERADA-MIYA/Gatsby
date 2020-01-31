import React, { Fragment } from 'react'

function month(m) {
    switch (m) {
        case '01': return 'Jan'
        case '02': return 'Feb'
        case '03': return 'Mar'
        case '04': return 'Apr'
        case '05': return 'May'
        case '06': return 'Jun'
        case '07': return 'Jul'
        case '08': return 'Aug'
        case '09': return 'Sep'
        case '10': return 'Oct'
        case '11': return 'Nov'
        case '12': return 'Dec'
        default: return ''
    }
}

export default (props) => {
    // 2019-03-11
    const date = props.date.toString().split('-')
    return (
        <Fragment>
            {`${date[2][0] === '0' ? date[2][1] : date[2]}/${month(date[1])}/${date[0]}`}
        </Fragment>
    )

}