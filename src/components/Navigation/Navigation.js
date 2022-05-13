import './Navigation.scss';
import logo from '../../assets/logos/logo.png'

function Navigation() {


    return (
        
        <nav className="navbar">

            <div className="navbar__top">
                <img src={logo} alt="logo"/>
                <button className="navbar__button" type="button">discover</button>
                <button className="navbar__button" type="button">for you</button>
                <button className="navbar__button" type="button">story</button>
            </div>

            <div className="navbar__bottom">
                <img className="navbar__avatar" src="https://via.placeholder.com/150" alt="avatar"/>
                <div className="navbar__icons">
                    <img className="navbar__icon" src="https://via.placeholder.com/50" alt="icons"/>
                    <img className="navbar__icon" src="https://via.placeholder.com/50" alt="icons"/>
                </div>
            </div>
        </nav>
        
    );

}


export default Navigation;