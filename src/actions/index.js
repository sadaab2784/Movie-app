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
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';



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
      type: ADD_TO_FAVOURITES,
      // movies: movies
      movie
    }
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch (movie) {
  const url = `http://www.omdbapi.com/?apikey=42398dfa&t=${movie}`;
  return function (dispatch) {
    fetch(url)
    .then(response => response.json())
    .then(movie => {
      console.log('movie', movie);

      //dispatch an action
      dispatch(addMovieSearchResult(movie));
    })
  }
}

export function addMovieSearchResult (movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie
  };
}

