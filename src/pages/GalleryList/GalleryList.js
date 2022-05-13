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
import { v4 as uuid } from 'uuid';

const API_URL = process.env.REACT_APP_API_URL;

const imageArray = [[sampleOne, "Typography"], 
[sampleTwo, "Fine Art"], 
[sampleThree, "Photography"], 
[sampleFour, "3D Art"], 
[sampleFive, "Music"], 
[sampleSix, "Video"], 
[sampleSeven, "UI/UX"], 
[sampleOne, "SampleText"], 
[sampleTwo, "SampleText"]
];
const buttonText = ["All Categories", "Landscape", "Sculpture", "Land Art", "Painting", "Drawing", "3D Art", "Mock Up", "Footage"];
const galleryImage = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight];

export class GalleryList extends Component {

  state = {
    sample: []
  }

  componentDidMount() {
    this.setState({sample: galleryImage})
  }

  handleChange = (event) => {
    event.preventDefault();
    axios
    .get(`${API_URL}/sample/${event.target.search.value}`)
    .then((res) => {
        this.setState({sample: res.data.data})
    });
  }

  handleClick = (text) => {
    let passText = (text === "All Categories") ? "all" : text;

    axios
    .get(`${API_URL}/sample/${passText}`)
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
            return ( 
              <div>
                <h4 className="gallery__button-art__text">{image[1]}</h4>
                <img className="gallery__button-art__image" src={image[0]} alt="button-art"/> 
              </div>
            ) 
          })}
        </div>

        <div className="gallery__filter">
        {buttonText.map((text) => { 
            return ( 
                <GalleryButtons clickFn={this.handleClick} key={uuid()} name={text} />
            ) 
          })}
        </div>
          
        <div className="gallery__message">
          <h2>Welcome back, Bobby! What's inspiring you today?</h2>
          <form onSubmit={this.handleChange}>
            <input type="text" name="search" placeholder="Search for inspiration..."></input>
            <button type="submit">Search</button>
          </form>
          
        </div>

        <div className="gallery__items">
        {sample.map((image) => { 
            return ( 
              <div>
                <img src={image.assets === undefined ? image : image.assets.huge_thumb.url} alt="item" className="gallery__item"/>
                <GalleryItemInfo key={uuid()} />
              </div>
            ) 
          })}
        </div>



      </section>
            
      );
    }

}
  
  export default GalleryList;