import './GalleryList.scss';
import axios from 'axios';
import React, { Component } from 'react';
import GalleryButtons from '../../components/GalleryButtons/GalleryButtons';
import GalleryItemInfo from '../../components/GalleryItemInfo/GalleryItemInfo';
import sampleOne from '../../assets/images/buttons/sample1.png'
import sampleTwo from '../../assets/images/buttons/sample2.png'
import sampleThree from '../../assets/images/buttons/sample3.png'
import sampleFour from '../../assets/images/buttons/sample4.png'
import sampleFive from '../../assets/images/buttons/sample5.png'
import sampleSix from '../../assets/images/buttons/sample6.png'
import sampleSeven from '../../assets/images/buttons/sample7.png'
import imageOne from '../../assets/images/gallery/image1.png';
import imageTwo from '../../assets/images/gallery/image2.png';
import imageThree from '../../assets/images/gallery/image3.png';
import imageFour from '../../assets/images/gallery/image4.png';
import imageFive from '../../assets/images/gallery/image5.png';
import imageSix from '../../assets/images/gallery/image6.png';
import imageSeven from '../../assets/images/gallery/image7.png';
import imageEight from '../../assets/images/gallery/image8.png';

const API_URL = process.env.REACT_APP_API_URL;

const imageArray = [sampleOne, sampleTwo, sampleThree, sampleFour, sampleFive, sampleSix, sampleSeven, sampleOne, sampleTwo];
const buttonText = ["All Categories", "Landscape", "Sculpture", "Land Art", "Painting", "Drawing", "3D Art", "Mock Up", "Footage"];
const galleryImage = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight];

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
        
        <div className="gallery__button-art">
            {imageArray.map((image) => { 
            return ( <img className="gallery__button-art__image" src={image} alt="button-art"/> ) 
          })}
        </div>

        <div className="gallery__filter">
        {buttonText.map((text) => { 
            return ( <GalleryButtons name={text} /> ) 
          })}
        </div>
          
        <div className="gallery__message">
          <h2>Welcome back, Bobby! What's inspiring you today?</h2>
        </div>

        <div className="gallery__items">
        {galleryImage.map((image) => { 
            return ( 
              <div>
                <img src={image} alt="item" className="gallery__item"/>
                <GalleryItemInfo />
              </div>
            ) 
          })}
        </div>



      </section>
            
      );
    }

}
  
  export default GalleryList;