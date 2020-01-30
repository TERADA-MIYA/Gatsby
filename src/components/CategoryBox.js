import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'

function CategoryBox(props) {
    if (props.name === 'box1')
        return (
            <div className="box box1">
                <div className='box-inner'>
                    <Link to={`/${props.categories}`}>
                        <Icon name='python' w='48' h='48' />
                        <h2>{`${props.categories}`}</h2>
                    </Link>
                </div>
            </div>
        )
    else if (props.name === 'box2')
        return (
            <div className="box box2">
                <div className='box-inner'>
                    <Link to={`/${props.categories}`}>
                        <Icon name='python' w='48' h='48' />
                        <h2>{`${props.categories}`}</h2>
                    </Link>
                </div>
            </div>
        )
    else if (props.name === 'box3')
        return (
            <div className="box box3">
                <div className='box-inner'>
                    <Link to={`/${props.categories}`}>
                        <Icon name='python' w='48' h='48' />
                        <h2>{`${props.categories}`}</h2>
                    </Link>
                </div>
            </div>
        )
}

export default CategoryBox