import './GalleryItemInfo.scss';
import thumbsUp from '../../assets/icons/thumb-up.png';
import eyeFill from '../../assets/icons/eye-fill.png';
import filledHeart from '../../assets/icons/filled-heart.png';
import unfilledHeart from '../../assets/icons/heart.png';

function GalleryItemInfo() {


    return (
        
        <section className="item-info">
            <div className="item-info__left">
                <img className="item-info__avatar" src="https://via.placeholder.com/150" />
                <h4>Name</h4>
            </div>

            <div className="item-info__right">
                <img className="item-info__thumbs" src={thumbsUp} />
                <h4>#</h4>
                <img className="item-info__view" src={eyeFill} />
                <h4>#</h4>
                <img className="item-info__heart" src={unfilledHeart} />
            </div>



        </section>

        
    );

}


export default GalleryItemInfo;