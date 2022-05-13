import './ProjectUpload.scss';
import React, { Component } from 'react';
import UploadComponent from '../../components/UploadComponent/UploadComponent';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';

class Sample2 extends Component {
    
    render() {

        return (
            <div>
                <HeaderComponent/>
                <UploadComponent/>
            </div>
        );

    }

}

export default Sample2;
