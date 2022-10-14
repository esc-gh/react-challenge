import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Users = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        navigate(`/users/${id}`);
    };
    const [id, setId] = useState("")

    return(<>
            <h1> User Page </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" value={id} onChange={(e) => setId(e.target.value)}/>
                <button type="submit"> Find User </button>
            </form>
        </>
    )
}

export default Users;