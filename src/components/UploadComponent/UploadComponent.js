import React from 'react';
import { Link } from 'react-router-dom';
import './UploadComponent.scss'

const UploadComponent = () => {
    return (
        <div>
            <section className='upload'>
                <button className='upload__button'>
                    <Link className='upload__link' to='/discover'>Cancel</Link>
                </button>
                <div className='upload__div'>
                    <h1 className='upload__title'>What have you been creating?</h1>
                    <p className='upload__text'>Upload a project to share. This will be used as the thumbnail in your feeds.</p>
                    <Link className='upload__link' to='/upload/details'>
                        <div className='upload__box'>
                            <p className='upload__box--text'>Drag and drop your media, or <a href="">Browse</a></p>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default UploadComponent;