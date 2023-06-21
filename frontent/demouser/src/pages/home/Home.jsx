import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:8080/api/v1/user/list");
        console.log(response.data);
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1/user/delete/${id}`);
        getUsers();
    }

    return (
        <div className="container">
            <nav className="navbar bg-primary-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">User List / Home</a>
                    <Link className="btn btn-outline-dark" to="/add">Add User</Link>
                </div>
            </nav>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th>
                            UserName
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Function
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((u, index) => (
                            <tr key={index}>
                                <td>{u.username}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <Link
                                        to={`/view/${u.id}`}
                                        className="btn btn-outline-dark mx-2"
                                    >
                                        View</Link>
                                    <Link
                                        to={`/edit/${u.id}`}
                                        className="btn btn-primary mx-2"
                                    >Edit</Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteUser(u.id)}
                                    >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;