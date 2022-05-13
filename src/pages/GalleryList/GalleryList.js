import './GalleryList.scss';
import axios from 'axios';
import React, { Component } from 'react';
import GalleryItem from '../../components/GalleryItem/GalleryItem';

const API_URL = process.env.REACT_APP_API_URL;

export class GalleryList extends Component {

  state = {
    sample: []
  }

  componentDidMount() {
      axios
      .get(`${API_URL}/sample`)
      .then((res) => {
          this.setState({sample: res.data.data})
      });
      
  }

  render() {

    const {sample} = this.state;

    if(!sample[0]) {
      return;
    }

    return (
            <section className="gallery">
              
              {sample.map((image) => (
              <GalleryItem />
            ))}
            </section>
            
      );
    }

}
  
  export default GalleryList;