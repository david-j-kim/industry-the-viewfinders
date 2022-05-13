import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Mona from '../../assets/images/MonaUpdate.png'
import MonaThumb from '../../assets/images/MonaThumb.png'
import Mask from '../../assets/images/MaskThumb.png'
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
                        <input className='popup__text--input'></input>
                        <div className='popup__boxtag'>
                            <p className='popup__tag'>graphic design &times;</p>
                            <p className='popup__tag'>funny &times;</p>
                            <p className='popup__tag'>mona lisa &times;</p>
                            <p className='popup__tag'>social media &times;</p>
                        </div>
                        <p className='popup__text--color'>Suggested: image, graphic design, funny, branding, social media, art, portrait </p>
                    </div>
                    <div className="popup__text">
                        <p className="popup__content">Tools Used</p>
                        <input className='popup__text--input'></input>
                        <p className='popup__tag popup__tag--alone'>PicMonkey &times;</p>
                    </div>
                    <div className="popup__text">
                        <p className="popup__content">Associate Shutterstock Assets</p>
                        <div className='popup__text--flex'>
                            <p className="popup__text--generate">Generate links to asset sources found in this project</p>
                            <button className='popup__button--generate'>Generate</button>
                        </div>
                    </div>
                    <div>
                        <div className='popup__images'>
                            <img className='popup__thumb' alt='mona' src={MonaThumb}></img>
                            <p>Royalty-free <a className='popup__links' href=''>stock illustration ID: 1886589148</a></p>
                        </div>
                        <div className='popup__images'>
                            <img className='popup__thumb' alt='mask' src={Mask}></img>
                            <p>Royalty-free <a className='popup__links' href=''>stock illustration ID: 1886589148</a></p>
                        </div>
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