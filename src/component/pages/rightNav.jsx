const RightNav = () => {
    return (
        <nav >                 
        <ul className="nav-links">
      <li> <Link className="links" to='/'>Home</Link></li> 
      <li> <Link className="links" to='/signup'>Book A Ride</Link></li> 
      <li> <Link className="links" to='/'>Become A Driver</Link></li>  
      <li> <Link className="links" to='/'>Contact Us</Link></li> 
      <li> <Link className="links" to='/'>About</Link></li>  
        </ul>
</nav>
      );
}
 
export default RightNav;