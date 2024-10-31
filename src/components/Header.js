import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className='header'>
        <div className='app-logo'>
          <img alt='app-logo' src= {LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    )
  }
export default Header;  