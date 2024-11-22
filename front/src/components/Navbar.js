import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className ="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container">
               <Link className="navbar-brand" to="/">CRUD</Link>
               <div>
                <ul classNamae="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/add">Add User</Link>
                  </li>  
                </ul>
               </div>            
            </div>
        </nav>
    );
};

export default Navbar;