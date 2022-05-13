import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Mona from '../../assets/images/MonaUpdate.png'
import './PopUp.scss'


const PopUp = () => {
    return (
        <Popup trigger={<button className='details__button details__button--continue'>Continue</button>} modal nested>
        {close => (
        <div className="popup">
            <button className="popup__close" onClick={close}>&times;</button>
            <h1 className="popup__title"> Finishing Touches</h1>

            <div className='popup__feed'>
                <div>
                    <h3>In-Feed Preview</h3>
                    <img className='popup__image' alt='mona' src={Mona}></img>
                </div>
                <div>
                    <div className="popup__text">
                        <p className="popup__content">Project Tags (maximun 20)</p>
                        <input className='popup__text--input' placeholder='Add up to 20 keywords to help people discover you project'></input>
                        <p className='popup__text--color'>Suggested: image, graphic design, funny, branding, social media, art, portrait </p>
                    </div>
                    <div className="popup__text">
                        <p className="popup__content">Tools Used</p>
                        <input className='popup__text--input' placeholder='What software, hardware, or materials did you use?'></input>
                    </div>
                    <div className="popup__text popup__text--flex">
                        <div>
                            <p className="popup__content">Associate Shutterstock Assets</p>
                            <p className="">Generate links to asset sources found in this project</p>
                        </div>
                        <button className='popup__button--generate'>Generate</button>
                    </div>
                </div>
            </div>
            <div className='popup__flex'>
                <button className="popup__button-cancel" onClick={() => {close()}}>Cancel</button>
                <div className="popup__actions">
                    <button className="popup__button-save" onClick={() => {close()}}>Save as Draft</button>
                    <Link to='/profile'>
                        <button className="popup__button-publish">Publish</button>
                    </Link>
                </div>
            </div>
        </div>
        )}
        </Popup>
    );
};

export default PopUp;