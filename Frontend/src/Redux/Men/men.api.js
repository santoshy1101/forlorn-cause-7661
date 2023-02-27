import axios from "axios"
let baseURL = "https://long-boa-sun-hat.cyclic.app"
export const getapi = ({search,min,max})=>{
    if(search!="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/men/?search=${search}&min=${min}&max=${max}`)
    }else if(search!="" && min==1 && max==10000){
        return axios.get(`${baseURL}/men/?search=${search}`)
    }else if(search=="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/men/?min=${min}`)
    }else if(search!="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/men/?search=${search}&min=${min}`)
    }else if(search=="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/men/?max=${max}`)
    }else if(search!="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/men/?search=${search}&max=${max}`)
    }else if(search=="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/men/?min=${min}&max=${max}`)
    }else{
        return axios.get(`${baseURL}/men`)
    }
}
export const getbrand = ({brand,min,max})=>{
    console.log('brand,min,max:', brand,min,max)
    if(brand=="reset" && min==1 && max==10000){
        return axios.get(`${baseURL}/men/`)
    }else if(brand!="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/men/brand/?brand=${brand}&min=${min}&max=${max}`)
    }else if(brand!="" && min==1 && max==10000){
        return axios.get(`${baseURL}/men/brand/?brand=${brand}`)
    }else if(brand!="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/men/brand/?brand=${brand}&min=${min}`)
    }else if(brand!="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/men/brand/?brand=${brand}&max=${max}`)
    }
}
export const getcolor = ({color,min,max})=>{
    if(color=="reset" && min==1 && max==10000){
        return axios.get(`${baseURL}/men/`)
    }else if(color=="printed"){
        return getapi({search:color,min:1,max:10000})
    }else if(color=="Black"){
        return axios.get(`${baseURL}/men/black?min=${min}&max=${max}`)
    }else if(color=="Green"){
        return axios.get(`${baseURL}/men/green?min=${min}&max=${max}`)
    }else if(color=="Red"){
        return axios.get(`${baseURL}/men/red?min=${min}&max=${max}`)
    }else{
        return axios.get(`${baseURL}/men/`)
    }
}