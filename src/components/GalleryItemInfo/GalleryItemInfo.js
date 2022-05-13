import './GalleryItemInfo.scss';
import thumbsUp from '../../assets/icons/thumb-up.png';
import eyeFill from '../../assets/icons/eye-fill.png';
import filledHeart from '../../assets/icons/filled-heart.png';
import unfilledHeart from '../../assets/icons/heart.png';
import avatarFemale from '../../assets/icons/female-avatar.jpg';

function GalleryItemInfo( { name, like, view, heart }) {

    let imgSource = "";
    if (heart === 0 ) {
        imgSource = unfilledHeart;
    } else {
        imgSource = filledHeart;
    }

    return (
        
        <section className="item-info">
            <div className="item-info__left">
                <img className="item-info__avatar" src={avatarFemale} />
                <h4>{name}</h4>
            </div>

            <div className="item-info__right">
                <img className="item-info__heart" src={imgSource} />
                <img className="item-info__thumbs" src={thumbsUp} />
                <h4>{like}</h4>
                <img className="item-info__view" src={eyeFill} />
                <h4>{view}</h4>
            </div>



        </section>

        
    );

}


export default GalleryItemInfo;