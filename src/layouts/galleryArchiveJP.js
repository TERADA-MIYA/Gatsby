import React, { Fragment } from 'react'
import '../styles/galleryArchive.css'
import GalleryItemJP from '../components/GalleryItemJP'

const GalleryArchiveJP = (props) => {
    return (
        <Fragment>
            <div className='galleryArchive'>
                <div className='desktop'>
                    <div className='wrapper-5-5'>
                        <GalleryItemJP data={props.data} no={0} />
                        <div className='wrapper-50-50 gallery'>
                            <GalleryItemJP data={props.data} no={1} />
                            <div className='wrapper-5-5'>
                                <GalleryItemJP data={props.data} no={2} />
                                <GalleryItemJP data={props.data} no={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='galleryArchive-mobile'>
                <div className='mobile'>
                    <GalleryItemJP data={props.data} no={0} />
                    <GalleryItemJP data={props.data} no={1} />
                </div>
            </div>
        </Fragment>
    )
}

export default GalleryArchiveJP