import React, { Component } from 'react';
import './ProjectUploadDetails.scss'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import UploadDetailsComponent from '../../components/UploadDetailsComponent/UploadDetailsComponent';

class ProjectDetails extends Component {
    
    render() {

    return (
        <div>
            <HeaderComponent/>
            <UploadDetailsComponent/>
        </div>
    );
};
}
export default ProjectDetails;