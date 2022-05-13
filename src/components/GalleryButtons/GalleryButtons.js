import './GalleryButtons.scss';

function GalleryButtons( { name, clickFn }) {


    return (
        
        <button onClick={()=>clickFn(name)} className="gallery-buttons" type="button">{name}</button>

    );

}


export default GalleryButtons;