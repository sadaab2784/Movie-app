export default function movies (state = "some string", action) {
    if(action.type === 'ADD_MOVIES'){
        return action.movies;
    }
    return state;
}