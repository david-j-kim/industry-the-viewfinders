import './NavigationSide.scss';
import home from '../../assets/icons/home.png';
import catalog from '../../assets/icons/catalog.png';
import plan from '../../assets/icons/plan.png';
import discover from '../../assets/icons/discover.png';
import forYou from '../../assets/icons/heart.png';
import account from '../../assets/icons/account.png';
import help from '../../assets/icons/help.png';
import setting from '../../assets/icons/setting.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function NavigationSide() {

    const { pathname } = useLocation();
    return (
        
        <nav className="navbar">

            <div className="navbar__top">
            <NavLink
                    className="navbar__link" 
                    to="/"
                    activeClassName="navbar__link--active"
                    isActive={() => pathname.includes('/home')}>
                <img className="navbar__icon" src={home} alt="home"/>
                <h5 className="navbar__icon-text">Home</h5>
            </NavLink>

            <NavLink
                    className="navbar__link" 
                    to="/" >
                <img className="navbar__icon" src={catalog} alt="catalog"/>
                <h5 className="navbar__icon-text">Catalog</h5>
            </NavLink>

            <NavLink
                    className="navbar__link" 
                    to="/" >
                <img className="navbar__icon" src={plan} alt="plan"/>
                <h5 className="navbar__icon-text">Plan</h5>
            </NavLink>

            <NavLink
                    className="navbar__link" 
                    to="/discover"
                    activeClassName="navbar__link--active"
                    isActive={() => pathname.includes('/discover')}>
                <img className="navbar__icon" src={discover} alt="discover"/>
                <h5 className="navbar__icon-text">Discover</h5>
            </NavLink>

            <NavLink
                    className="navbar__link" 
                    to="/" >
                <img className="navbar__icon" src={forYou} alt="forYou"/>
                <h5 className="navbar__icon-text">For You</h5>
            </NavLink>
            </div>

            <div className="navbar__bottom">

            <NavLink
                    className="navbar__link" 
                    to="/profile"
                    activeClassName="navbar__link--active"
                    isActive={() => pathname.includes('/profile')}>
                <img className="navbar__icon" src={account} alt="account"/>
                <h5 className="navbar__icon-text">Account</h5>
            </NavLink>

                <img className="navbar__icon" src={help} alt="help"/>
                <h5 className="navbar__icon-text">Help</h5>

                <img className="navbar__icon" src={setting} alt="setting"/>
                <h5 className="navbar__icon-text">Setting</h5>
            </div>
        </nav>
        
    );

}


export default NavigationSide;