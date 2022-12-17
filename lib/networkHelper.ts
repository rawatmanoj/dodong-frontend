import axios from "axios";
import { Urls } from "./apiConstants";
import { getToken } from "./utils";


const axiosInstance = axios.create({
    baseURL:Urls.base_url
})

axiosInstance.interceptors.response.use(response=>{
    return response;
},
error=>{
    if(error.response.status===500){
        console.log(error.response.data.error)
    }
    if(error.response.status===403){
        console.log(error.response.data.error)
    }
    if(error.response.status===404){
        console.log(error.response.data.error)
    }
    if(error.response.status===400){
        console.log(error.response.data.error)
    }
    return Promise.reject(error)
}
)



export const postRequest = (url:string,data:any)=>{
        return axiosInstance({
            method:"post",
            url,
            data,
            headers:{
                "authorization":`Bearer ${getToken()}`
            }
        })
}
export const getRequest = (url:string)=>{
        return axiosInstance({
            method:"get",
            url,
            headers:{
                "authorization":`Bearer ${getToken()}`
            }
        })
}
export const deleteRequest = (url:string)=>{
        return axiosInstance({
            method:"delete",
            url,
            headers:{
                "authorization":`Bearer ${getToken()}`
            }
        })
}
export const putRequest = (url:string,data:any)=>{
        return axiosInstance({
            method:"put",
            url,
            data,
            headers:{
                "authorization":`Bearer ${getToken()}`
            }
        })
}