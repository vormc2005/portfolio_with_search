import {GET_PROJECTS,
SEARCH_PROJECTS,
SET_LOADING, 
PROJECTS_ERROR} from './types'



export const getProjects=()=> async dispatch => {
    try{

        setLoading();

        const res = await fetch('/projects');
        const data = await res.json();

        dispatch ({
            type: GET_PROJECTS,
            payload: data
        })

    }catch(err){

        dispatch({
            type:PROJECTS_ERROR,
            payload: err.response.data
        })

    }
          

}

//Search projects
export const searchProjects=(text)=> async dispatch => {
    try{

        setLoading();

        const res = await fetch(`/projects?q=${text}`);
        const data = await res.json();

        dispatch ({
            type: SEARCH_PROJECTS,
            payload: data
        })

    }catch(err){

        dispatch({
            type:PROJECTS_ERROR,
            payload: err.response.data
        })

    }
    
         

}


//set loading to true
export const setLoading = ()=>{
    return{
        type:SET_LOADING
    };
};