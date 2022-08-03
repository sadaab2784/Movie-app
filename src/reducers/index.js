import { ADD_MOVIES } from '../actions';

// change the current state to favoutite state 
const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies (state = initialMoviesState, action) {
    if(action.type === ADD_MOVIES){
        return {
            // now i can used the spread operator to change the current state to favourite state
            ...state,
            list: action.movies
        }
    }
    return state;
}