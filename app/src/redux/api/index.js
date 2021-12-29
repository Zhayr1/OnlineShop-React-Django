import axiosInstance from "../../axiosApi"


export function fetchApiCall (method, url) {
    // console.log('fetch init');
    return fetch(url,{
        method
    }).then(response => response.json())
}


export function axiosApiCall(method, url, data){
    // console.log('axios init');
    // const furl = 'http://127.0.0.1:8000/api/' + url
    if (method === 'get'){

    }else if(method === 'post'){
        return axiosInstance.post(url, {
            ...data
        }).then(response => response)
        .catch(err => err)
    }
}