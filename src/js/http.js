import Axios from 'axios'

Axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
})
Axios.interceptors.response.use(function(response){
    console.log('正确请求',response.response)
    return response.data
},function(error){
    console.log('错误请求',error.response)
    switch(error.response.data.code){
        case 400:
            error.message='错误请求'
            break;
        case 401:
            error.message='未授权，请重新登录'
            break;
        case 404:
            error.message='请求错误，未找到该资源'
            break
        case 500:
            error.message="服务器端错误"
            break
        case 501:
            error.message='网络未实现'
            break

    }
    return Promise.reject(error)
});
export default Axios