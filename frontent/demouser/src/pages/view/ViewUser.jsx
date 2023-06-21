import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {

    const { id } = useParams();

    const [user, setUser] = useState({
        username: "",
        name: "",
        email: ""
    });

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
                    <a className="navbar-brand" href="#">View User</a>
                    <Link className="btn btn-outline-dark" to="/">Back</Link>
                </div>
            </nav>
            <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem"}}>
                <div className="card-header">UserName: {user.username}</div>
                <div className="card-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item card-text">{user.name}</li>
                        <li className="list-group-item card-text">{user.email}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ViewUser;