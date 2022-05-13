import React from 'react';
import './ProfileComponent.scss'
import facebook from '../../assets/images/logo/facebook.png'
import heart from '../../assets/images/logo/heart.png'
import linkedin from '../../assets/images/logo/linkedin.png'
import search from '../../assets/images/logo/search.png'
import thumbs from '../../assets/images/logo/thumbs.png'
import twitter from '../../assets/images/logo/twitter.png'
import views from '../../assets/images/logo/views.png'
import world from '../../assets/images/logo/world.png'
import Profile from '../../assets/images/Profile.png'
import Profile1 from '../../assets/images/Profile1.png'
import Profile2 from '../../assets/images/Profile2.png'
import Profile3 from '../../assets/images/Profile3.png'
import Profile4 from '../../assets/images/Profile4.png'




const ProfileComponent = () => {
    return (
        <div className='profile'>
            <img className='profile__search' alt='search' src={search}></img>
            <div className="profile__box">
                <img className='profile__image' alt='profile' src={Profile}></img>
                <div>
                    <h1 className='profile__title'>Bobby Yang</h1>
                    <p className="profile__text">BYang5676</p>
                    <div className='profile__buttons'>
                        <button className='profile__buttons--button'>Share</button>
                        <img className='profile__buttons--social profile__buttons--border' alt='twitter' src={twitter}></img>
                        <img className='profile__buttons--social' alt='facebook' src={facebook}></img>
                        <img className='profile__buttons--social' alt='linkedin' src={linkedin}></img>
                        <img className='profile__buttons--social' alt='web' src={world}></img>
                        <p className='profile__buttons--text'>Thailand</p>
                    </div>
                </div>
            </div>
            <div className='profile__nav'>
                <p className="profile__nav--text">Inspired Work</p>
                <p className="profile__nav--text profile__nav--created">Created</p>
                <p className="profile__nav--text">Collection</p>
            </div>
            <div className='profile__pictures'>
                <div>
                    <img alt='profilePictue' src={Profile1}></img>
                    <div className="profile__subtext">
                        <p className="profile__subtext--text">Created at May 13th 00:49 AM</p>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='thumbs' src={thumbs}></img>
                            <p>0</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='views' src={views}></img>
                            <p>2</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='heart' src={heart}></img>
                            <p>2</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt='profilePictue' src={Profile2}></img>
                    <div className="profile__subtext">
                        <p className="profile__subtext--text">Created at May 13th 00:49 AM</p>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='thumbs' src={thumbs}></img>
                            <p>36</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='views' src={views}></img>
                            <p>122</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='heart' src={heart}></img>
                            <p>17</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt='profilePictue' src={Profile3}></img>
                    <div className="profile__subtext">
                        <p className="profile__subtext--text">Created at May 13th 00:49 AM</p>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='thumbs' src={thumbs}></img>
                            <p>34</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='views' src={views}></img>
                            <p>788</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='heart' src={heart}></img>
                            <p>39</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img alt='profilePictue' src={Profile4}></img>
                    <div className="profile__subtext">
                        <p className="profile__subtext--text">Created at May 13th 00:49 AM</p>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='thumbs' src={thumbs}></img>
                            <p>190</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='views' src={views}></img>
                            <p>876</p>
                        </div>
                        <div className="profile__subtext--icons">
                            <img className="profile__subtext--width" alt='heart' src={heart}></img>
                            <p>213</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;