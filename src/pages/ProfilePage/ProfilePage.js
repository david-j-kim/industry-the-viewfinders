import React from 'react';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import './ProfilePage.scss'

const ProfilePage = () => {
    return (
        <div>
            <HeaderComponent/>
            <ProfileComponent/>
        </div>
    );
};

export default ProfilePage;