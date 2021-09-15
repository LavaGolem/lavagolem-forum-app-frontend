import axios from "axios";
import {userLoginDataUrl, userRegisterUrl} from "../util/url";

export const requestUserRegister = async (user) => {
    await axios.post(userRegisterUrl, user).then(response => {
        const {data} = response;
        window.localStorage.setItem('jwt', data.token);
        window.dispatchEvent( new Event('storage') )
        return true
    }).catch(error => {
        console.log("there was an error")
        return false;
    })
}

export const requestUserLogin = async (user) => {
    return await axios.post(userLoginDataUrl, user).then(response => {
        const {data} = response;
        window.localStorage.setItem('jwt', data.token);
        window.dispatchEvent( new Event('storage') )
        return true
    }).catch(error => {
        console.log("there was an error")
        return false;
    })
}