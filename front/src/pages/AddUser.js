import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",  
        image: "",
    });

const handleChange = (name) => (e) => {
    const value = name === "image"?e.target.files[0]:e.target.value;
    setData({...data, [name]: value});
};

const handleSubmit = async () => {
    try{
        let formData = new FormData();
        formData.append("image", data.image);
        formData.append("name",data.name);

        const res = await fetch("http://localhost:3000/user",{method:"POST", body:formData,});
        if(res.ok){
            setData({name: "", image: "",});
            navigate("/", {replace: true});
        }
    }
    catch (error){
        console.log(error);
    }
};

    return (
        <div style={{maxWidth:500, margin:"auto"}}>
            <div className="mb-3">
                <input className="form-control" placeholder="Enter Your Name" onChange={handleChange("name")} type="text" name="name" value={data.name}/>
            </div>
            <div className="mb-3">
                <input className="form-control" type="file" onChange={handleChange("image")} name="image" accept="image/*"/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default AddUser; 