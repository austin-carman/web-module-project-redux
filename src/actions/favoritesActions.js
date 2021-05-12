export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const TOGGLE_FAV = 'TOGGLE_FAV';


export const favoriteMovie = (movie) => {
    return({type: ADD_FAV, payload: movie});
}

export const removeFavorite = (id) => {
    return({type: REMOVE_FAV, payload: id});
}

export const toggleFavorite = () => {
    return({type: TOGGLE_FAV});
}
