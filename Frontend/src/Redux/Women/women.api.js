import axios from "axios"
let baseURL = "https://long-boa-sun-hat.cyclic.app"
export const getapi = ({search,min,max})=>{
    if(search!="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/women/?search=${search}&min=${min}&max=${max}`)
    }else if(search!="" && min==1 && max==10000){
        return axios.get(`${baseURL}/women/?search=${search}`)
    }else if(search=="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/women/?min=${min}`)
    }else if(search!="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/women/?search=${search}&min=${min}`)
    }else if(search=="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/women/?max=${max}`)
    }else if(search!="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/women/?search=${search}&max=${max}`)
    }else if(search=="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/women/?min=${min}&max=${max}`)
    }else{
        return axios.get(`${baseURL}/women`)
    }
}
export const getbrand = ({brand,min,max})=>{
    console.log('brand,min,max:', brand,min,max)
    if(brand=="reset" && min==1 && max==10000){
        return axios.get(`${baseURL}/women/`)
    }else if(brand!="" && min!=1 && max!=10000){
        return axios.get(`${baseURL}/women/brand/?brand=${brand}&min=${min}&max=${max}`)
    }else if(brand!="" && min==1 && max==10000){
        return axios.get(`${baseURL}/women/brand/?brand=${brand}`)
    }else if(brand!="" && min!=1 && max==10000){
        return axios.get(`${baseURL}/women/brand/?brand=${brand}&min=${min}`)
    }else if(brand!="" && min==1 && max!=10000){
        return axios.get(`${baseURL}/women/brand/?brand=${brand}&max=${max}`)
    }
}
export const getcolor = ({color,min,max})=>{
    if(color=="reset" && min==1 && max==10000){
        return axios.get(`${baseURL}/women/`)
    }else if(color=="Printed"){
        return getapi({search:color,min:1,max:10000})
    }else if(color=="Black"){
        return axios.get(`${baseURL}/women/black?min=${min}&max=${max}`)
    }else if(color=="Blue"){
        return axios.get(`${baseURL}/women/blue?min=${min}&max=${max}`)
    }else if(color=="Pink"){
        return axios.get(`${baseURL}/women/pink?min=${min}&max=${max}`)
    }else{
        return axios.get(`${baseURL}/women/`)
    }
}