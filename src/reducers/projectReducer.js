import {GET_PROJECTS,
    SEARCH_PROJECTS,
    SET_LOADING, 
    PROJECTS_ERROR} from '../actions/types'



const initialState={
    projects: null,
    current:null,
    loading:false,
    error:null

}

export default (state = initialState, action)=>{
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                projects:action.payload,
                loading:false
            }
        case SEARCH_PROJECTS:
            return {
                ...state,
                projects:action.payload
            }    
        case SET_LOADING:
            return{
                ...state, 
                loading: true
            }
        case PROJECTS_ERROR:
            console.error(action.payload);
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }

}