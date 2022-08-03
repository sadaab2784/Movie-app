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
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

// this function are called action creators for add movies
export  function addMovies (movies) {
    return {
        type: ADD_MOVIES,
        // movies: movies
        movies
      }
}

// this function are called action creators for add favourite
export  function addFavourite (movie) {
  return {
      type: ADD_FAVOURITE,
      // movies: movies
      movie
    }
}

