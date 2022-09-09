import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions';

// change the current state to favoutite state 
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false
};
export function movies (state = initialMoviesState, action) {
    console.log('MOVIES REDUCER');
    // if(action.type === ADD_MOVIES){
    //     return {
    //         // now i can used the spread operator to change the current state to favourite state
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    // Generally in React we can used the switch case condition
    switch (action.type) {
        case ADD_MOVIES:
            return {
                // used spread operator
                ...state,
                list: action.movies
            }
        
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        
        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return {
                ...state,
                favourites: filteredArray
            };

        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
        }
    }

const initialSearchState = { 
    result: {} 
};
export function search (state = initialSearchState, action){
    console.log('SEARCH REDUCER');
    return state;
}

const initialRootState = {
    movies: initialMoviesState,
    search: initialSearchState
};

export default function rootReducer (state= initialRootState, action){
    return {
        movies: movies(state.movies, action),
        search: search(state.search, action)
    }
}