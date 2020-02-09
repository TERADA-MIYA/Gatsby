import React, { Fragment } from 'react'
import '../styles/galleryArchive.css'
import GalleryItem from '../components/GalleryItem'

class GalleryArchiveJP extends React.Component {
    render() {
        return (
            <Fragment>
                <div className='galleryArchive'>
                    <div className='desktop'>
                        <div className='wrapper-5-5'>
                            <GalleryItem data={this.props.data} no={0} />
                            <div className='wrapper-50-50 gallery'>
                                <GalleryItem data={this.props.data} no={1} />
                                <div className='wrapper-5-5'>
                                    <GalleryItem data={this.props.data} no={2} />
                                    <GalleryItem data={this.props.data} no={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='galleryArchive-mobile'>
                    <div className='mobile'>
                        <GalleryItem data={this.props.data} no={0} />
                        <GalleryItem data={this.props.data} no={1} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GalleryArchiveJP