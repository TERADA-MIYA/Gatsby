import React, { Fragment } from 'react'
import '../styles/galleryArchive.css'
import GalleryItem from '../components/GalleryItem'

const GalleryArchive = (props) => {
    return (
        <Fragment>
            <div className='galleryArchive'>
                <div className='desktop'>
                    <div className='wrapper-5-5'>
                        <GalleryItem data={props.data} no={0} />
                        <div className='wrapper-50-50 gallery'>
                            <GalleryItem data={props.data} no={1} />
                            <div className='wrapper-5-5'>
                                <GalleryItem data={props.data} no={2} />
                                <GalleryItem data={props.data} no={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='galleryArchive-mobile'>
                <div className='mobile'>
                    <GalleryItem data={props.data} no={0} />
                    <GalleryItem data={props.data} no={1} />
                </div>
            </div>
        </Fragment>
    )
}

export default GalleryArchive