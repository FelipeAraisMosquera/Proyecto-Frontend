import Login from "../components/Login"
/* import { useHistory } from "react-router-dom"; */
//import { useEffect } from 'react';

export default function LoginPage ({users, checkLogin, setCheckLogin, setGoogleUserData, googleUserData}) {
   /*  const history = useHistory(); */
    
    return (
        <>
            <Login users={users}  setCheckLogin={setCheckLogin} setGoogleUserData={setGoogleUserData} googleUserData={googleUserData}/>
        </>
    )
}



