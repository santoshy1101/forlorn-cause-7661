import { ERROR, GET, LOADING } from "./men.actiontype";

export const getFun=()=>async(dispatch)=>{
    dispatch({type:LOADING});
    try {
        let data=await getapi()
        dispatch({type:GET,payload:data.data})
    } catch (err) {
        console.log(err)
        dispatch({type:ERROR})
    }
}
