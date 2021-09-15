import axios from "axios";
import {userLoginDataUrl, userRegisterUrl} from "../util/url";

export const requestUserRegister = (user) => {
    axios.post(userRegisterUrl, user).then(response => {
        const {data} = response;
    }).catch(error => {
        console.log("there was an error")
    })
}

export const requestUserLogin = (user) => {
    axios.post(userLoginDataUrl, user).then(response => {
        const {data} = response;
        window.localStorage.setItem('jwt', data.token);
        window.dispatchEvent( new Event('storage') )
    }).catch(error => {
        console.log("there was an error")
    })
}