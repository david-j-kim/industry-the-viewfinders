import React from 'react';
import './HeaderComponent.scss'
import ShutterStock from '../../assets/images/logo/ShutterStock.png'

const HeaderComponent = () => {
    return (
        <div className='header'>
            <img alt='logo' src={ShutterStock}></img>
        </div>
    );
};

export default HeaderComponent;