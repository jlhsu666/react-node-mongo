
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUsers] = useState();

    useEffect(()=>{
        const fetchUsers = async () => {
          const res = await fetch(`${process.env}/http://localhost:3000/user`);
          const data = await res.json();  
          setUsers(data); 
        };
        fetchUsers();
    },[]);

    const handleDelete = async (id) => {};

    return (
        <div>
           {users?.map( (user)=> (
              <div>
                <img src={user.avatar} width={"100%"} height={200} />
                <div>
                    <h4>{user.name}</h4>
                    <div>
                        <Link to={`/edit/${user._id}`}>Edit</Link>
                        <button onClick={ ()=> handleDelete(user._id) }>X</button>
                    </div>
                </div>
              </div>
           ) ) }     
        </div>
    );
};



export default Home; 