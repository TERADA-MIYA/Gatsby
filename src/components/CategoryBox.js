import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'

function CategoryBox(props) {
    function categoryNameKorean(s) {
        switch (s) {
            case 'algorithm':
                return '알고리즘'
            case 'javascript':
                return '자바스크립트'
            case 'python':
                return '파이썬'
            case 'react':
                return '리액트'
            case 'webhacking':
                return '웹 해킹'
            default:
                return '잡담'
        }
    }
    if (props.name === 'box1')
        return (
            <div className="box box1">
                <Link to={`/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameKorean(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
    else if (props.name === 'box2')
        return (
            <div className="box box2">
                <Link to={`/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameKorean(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
    else if (props.name === 'box3')
        return (
            <div className="box box3">
                <Link to={`/${props.categories}`}>
                    <div className='box-inner'>
                        <Icon name={props.categories} w='48' h='48' />
                        <h2>{`${categoryNameKorean(props.categories)}`}</h2>
                    </div>
                </Link>
            </div>
        )
}

export default CategoryBox