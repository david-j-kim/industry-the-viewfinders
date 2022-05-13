import './NavigationTop.scss';
import logo from '../../assets/logos/logo.png';
import { Link, useLocation } from 'react-router-dom';
import search from '../../assets/images/logo/search.png';

function NavigationTop() {

    const { pathname } = useLocation();
    let visible = pathname.includes('/discover') ? "" : "header__upload--inactive";

    let searchIcon = pathname.includes('/profile') ? "" : "header__upload--inactive";

    return (
        
        <nav className="header">
            <img className="header__logo" src={logo} alt="logo"/>

            <Link to="/upload">
                <button className={`header__upload ${visible}`} type="button">Upload</button>
            </Link>

            <img className={`header__search ${searchIcon}`}  alt='search' src={search}></img>
        </nav>
        
    );

}


export default NavigationTop;