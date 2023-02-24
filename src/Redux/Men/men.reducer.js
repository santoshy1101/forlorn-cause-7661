import { ERROR, GET, LOADING } from "./men.actiontype";

let init={
    data:[],
    loading:false,
    error:false
}
export const menReducer=(state=init,action)=>{
    const {payload,type}=action;
    switch(type){
        case GET:{
            return {...state,data:payload,loading:false,error:false}
        }
        case LOADING:{
            return {...state,loading:true,error:false}
        }
        case ERROR:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }
}