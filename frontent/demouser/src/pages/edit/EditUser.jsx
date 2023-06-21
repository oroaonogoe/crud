import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {

    let navigate = useNavigate();

    const {id} = useParams();

    const [user, setUser] = useState({
        username: "",
        name: "",
        email: ""
    });

    const { username, name, email } = user;

    const onInputChange = async (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/user/edit/${id}`, user);
        navigate("/");
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/user/${id}`);
        setUser(result.data);
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className="container">
            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Edit User</a>
                    <Link className="btn btn-outline-dark" to="/">Back</Link>
                </div>
            </nav>
            <form className="shadow p-3" onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input type="text" className="form-control" value={username} name="username" id="username" onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} name="name" id="name" onChange={(e) => onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" value={email} name="email" id="email" onChange={(e) => onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default EditUser;