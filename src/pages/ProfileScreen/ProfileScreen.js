import './ProfileScreen.scss';
import React, { Component } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

class Sample extends Component {

    state = {
        sample: []
    }
    
    componentDidMount() {
        axios
        .get(`${API_URL}/sample`)
        .then((res) => {
            this.setState({sample: res.data})
        });
      }

    render() {

        const {sample} = this.state;

        if(!sample[0]) {
            return;
        }

        return (

            <div>{`Test data returned from server: ${sample[0].name}`}</div>

        );

    }

}

export default Sample;
