import { useContext } from "react";
import username from '../contexts/context';

const SignedIn = () => {

    const sharedUsername = useContext(username);


    return(
        <h1> Successfuly signed in as: {sharedUsername.user}</h1>
    )
}

export default SignedIn;