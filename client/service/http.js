import axios from 'axios'
function request(url,params={},method='GET'){
    if(method==='GET'){
        
        let dataStr='';
        Object.keys(params).forEach((v)=>{
            dataStr+=`${v}=${params[v]}&`
        })
        dataStr=dataStr.substr(0,url.lastIndexOf('&'));
        dataStr?url+='?':'';
        url+=dataStr;
        params=null;
    }
   return axios({
        method:method,
        url,
        data:params
    })
}
export default request;