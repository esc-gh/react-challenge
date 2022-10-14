import { useParams } from "react-router-dom";


const UserId = () => {

    const param = useParams();
    console.log(param)

    return(
    <div>
        <h1>User ID: {param.id}</h1>
    </div>)

}

export default UserId;