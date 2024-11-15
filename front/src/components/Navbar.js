import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
               <Link to="/">CRUD</Link>
               <div>
                <ul>
                  <li>
                    <Link to="/add">Add User</Link>
                  </li>  
                </ul>
               </div>            
            </div>
        </nav>
    );
};

export default Navbar;