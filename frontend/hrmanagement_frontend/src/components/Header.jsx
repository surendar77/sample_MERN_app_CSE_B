import { Link } from 'react-router-dom';
import './Header.css'
function Header(){
     return(
        <div>
          <div class="header">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          </div>
        </div>
    )
}
export default Header;