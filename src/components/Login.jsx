import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import username from '../contexts/context';


const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate("/signedIn");
    };

    const sharedUsername = useContext(username);

    return(<>
            <h1> User Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter username" onChange={(e) => sharedUsername.setUser(e.target.value)}/>
                <button type="submit"> Login </button>
            </form>
        </>
    )
}

export default Login;