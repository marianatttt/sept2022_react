import {axiosService} from "./axiosService";
import {urls} from "../configs";

const accessTokenKey = 'access'
const refreshTokenKey = 'refresh'

const authService ={
    login: async function (cred) {
       const response =  await axiosService.post(urls.auth.login, cred);

       if (response.status === 200){
           this.setToken(response.data)
       }
       return response
    },

    refresh: async function (refresh){
        const response = await axiosService.post(urls.auth.refresh, {refresh})

        if (response.status === 200){
            this.setToken(response.data)
        }
        return response


    },
    me:()=>axiosService.get(urls.auth.me),

    setToken:({access, refresh})=>{
        localStorage.setItem(accessTokenKey, access)
        localStorage.setItem(refreshTokenKey, refresh)
    },

    getAccessToken:()=>localStorage.getItem(accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(refreshTokenKey),
    deleteToken:()=>{
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated:()=>!!localStorage.getItem(accessTokenKey)
}

export {
    authService
}