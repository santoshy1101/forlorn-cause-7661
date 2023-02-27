import { GOOGLE_SIGN_IN_ERROR, GOOGLE_SIGN_IN_START, GOOGLE_SIGN_IN_SUCCESS } from "./actionType";



const initialState = {
    loading: false,
    currentUser: null,
    error: null,
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_SIGN_IN_START:
            return {...state, loading:true}
            case GOOGLE_SIGN_IN_SUCCESS:
                return {...state, loading:false, currentUser: action.payload}
                case GOOGLE_SIGN_IN_ERROR:
                    return {...state, loading:false, currentUser: action.payload}
        default: 
        return state;
    }
}