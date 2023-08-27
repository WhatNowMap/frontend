import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../App";

export const onEnterRoute = (notLoggedInRedirect='/') => {
    const loggedInStatus = useContext(LoggedInContext)
    let navigate = useNavigate();
    useEffect(()=>{
        if(loggedInStatus === "NOT_LOGGED_IN"){
            navigate(notLoggedInRedirect)
        }
    }, [])
}