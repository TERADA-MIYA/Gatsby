import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'

function CategoryBoxJP(props) {
    function categoryNameJapanese(s) {
        switch (s) {
            case 'algorithm':
                return 'Algorithm'
            case 'javascript':
                return 'Javascript'
            case 'python':
                return 'Python'
            case 'react':
                return 'React'
            case 'webhacking':
                return 'ハッキング'
            default:
                return '一般'
        }
    }
    if (props.name === 'box1')
        return (
            <div className="box box1">
                <Link to={`/jp/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameJapanese(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
    else if (props.name === 'box2')
        return (
            <div className="box box2">
                <Link to={`/jp/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameJapanese(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
    else if (props.name === 'box3')
        return (
            <div className="box box3">
                <Link to={`/jp/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameJapanese(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
}

export default CategoryBoxJP