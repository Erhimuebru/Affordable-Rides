import { Link, Outlet } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
             <h1>Site-Logo!....</h1>
        <nav  className="navbar">      
                    
                    <ul className="nav-links">
                  <li> <Link className="links" to='/'>Home</Link></li> 
                  <li> <Link className="links" to='/signup'>Book A Ride</Link></li> 
                  <li> <Link className="links" to='/'>Become A Driver</Link></li>  
                  <li> <Link className="links" to='/'>Contact Us</Link></li> 
                  <li> <Link className="links" to='/'>About</Link></li>  
                 <li> <Link className="nav-btn" to='#'>Partner Sign Up</Link></li>
                    </ul>
                    </nav>
       
       
        <Outlet/>
       

        </header>

        
     );
}
 
export default Header;