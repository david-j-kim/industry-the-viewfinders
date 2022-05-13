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
            console.log(res.data.data);
            this.setState({sample: res.data.data})
        });
        
      }

    render() {

        const {sample} = this.state;

        if(!sample[0]) {
            return;
        }

        return (



            <div>{sample.map((image) => { 
                return ( <img src={image.assets.huge_thumb.url} /> ) 
            })}
            </div>

        );

    }

}

export default Sample;
