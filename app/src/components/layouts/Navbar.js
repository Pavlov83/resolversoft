import React from 'react';
import styled from 'styled-components'
import{Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <NavbarContainer>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">ResolverSoft</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">

        <Link className="nav-link" to="/articles">Edit Posts
        <span className="sr-only"> </span>
        </Link> 
       
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/add-article">Add Post 
        <span className="sr-only"> </span>
        </Link> 
        
      </li>
      
    </ul>
    
  </div>

</nav>
            
        </NavbarContainer>
    )
}

export default Navbar

//main navbar container
const NavbarContainer = styled.div`

`;