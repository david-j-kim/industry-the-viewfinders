import React from 'react';
import MonaLisa from '../../assets/images/MonaLisa.png'
import PopUp from '../PopUp/PopUp';
import './UploadDetailsComponent.scss'

const UploadDetailsComponent = () => {
    return (
        <div>
            <div className='details__flex'>
                <button className='details__button'>Cancel</button>
                <div>
                    <button className='details__button details__button--save'>Save as draft</button>
                    <PopUp/>
                </div>
            </div>
            <section className='details__box'>
                <input className="details__title" placeholder='Give your project a name...'></input>
                <img src={MonaLisa}  className="details__image" alt='Mona Lisa'></img>
                <input className='details__text' placeholder='Add a description...'></input>
            </section>
        </div>
    );
};

export default UploadDetailsComponent;