import * as types from "./actionType"
import axios from "axios"


// get function -
export const getBagData = ()=> (dispatch)=>
{
    dispatch({type: types.GET_BAG_REQUEST})
    return axios
        .get("https://long-boa-sun-hat.cyclic.app/bag")
        .then(res=>{
            dispatch({type: types.GET_BAG_SUCCESS, payload: res.data})
            // console.log(res.data)
        })
        .catch(err=>dispatch({type: types.GET_BAG_ERROR}))
}

// delete bag function -
export const deleteBagData = (id)=> (dispatch)=>
{
     console.log(id)
    dispatch({type: types.DELETE_BAG_REQUEST})
    return axios
        .delete(`https://long-boa-sun-hat.cyclic.app/bag/${id}`)
        .then((res)=>{
            dispatch({type: types.DELETE_BAG_SUCCESS, payload: res.data})
        })
        
        .catch(err=>dispatch({type: types.DELETE_BAG_ERROR}))
}