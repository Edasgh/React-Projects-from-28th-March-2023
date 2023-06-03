import {account} from "../Appwrite/appwrite_config";
import { useState , useEffect } from "react";
export const getSession=async()=>{

    const [userID, setUserID] = useState();
    
useEffect(() => {
    const getData = account.get();
    getData.then(
        function (response) {
            setUserID(response.$id);
        },
        function (error) {
            console.log(error);
        }
        );
    }, []);
   return(userID)
    
    
}