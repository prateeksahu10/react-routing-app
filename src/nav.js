import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component{
render(){
    return(
       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand"  to="/">MERN masters</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
    )
}
}
export default Navbar;