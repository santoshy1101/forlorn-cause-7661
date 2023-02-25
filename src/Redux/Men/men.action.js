import { ERROR, GET, LOADING, SORT, SORT_BRAND, SORT_COLOR } from "./men.actiontype";
import { getapi, getbrand, getcolor } from "./men.api";

export const getFun=(payload)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getapi(payload)
        dispatch({type:GET,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const sortFun=(payload)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getapi({search:"",min:1,max:10000})
        dispatch({type:SORT,payload:{data:data.data,sort:payload}})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const getBrandFun=(brandName)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getbrand({brand:brandName,min:1,max:10000})
        dispatch({type:SORT_BRAND,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
export const getColorFun=(colorValue)=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getcolor({color:colorValue,min:1,max:10000})
        dispatch({type:SORT_COLOR,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
