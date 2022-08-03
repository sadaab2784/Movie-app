// this will the whole object is the action and this will be given to the reducer
 
// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }


// this variables are called as action type
export const ADD_MOVIES = 'ADD_MOVIES';

// this function are called action creators
export  function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        // movies: movies
        movies
      }
}