import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './PopUp.scss'


const PopUp = () => {
    return (
        <Popup trigger={<button className='details__button details__button--continue'>Continue</button>} modal nested>
        {close => (
        <div className="popup">
            <button className="popup__close" onClick={close}>&times;</button>
            <div className="popup__text">
                <h1 className="popup__title"> Delete inventory item? </h1>
                <p className="popup__content">Please confirm that you’d like to delete from the inventory list. You won’t be able to undo this action.</p>
            </div>
            <div className="popup__actions">
            <button className="popup__button-cancel" onClick={() => {close()}}>Cancel</button>
            <Link to='/'>
                <button className="popup__button-delete">Delete</button>
            </Link>
            </div>
        </div>
        )}
        </Popup>
    );
};

export default PopUp;