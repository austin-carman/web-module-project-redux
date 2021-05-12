import { ADD_FAV, REMOVE_FAV, TOGGLE_FAV } from '../actions/favoritesActions';


const initialState = {
    favorites:  [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            };
        case REMOVE_FAV:
            return {    
                ...state,            
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            };
        case TOGGLE_FAV:
            return{
                ...state,
                displayFavorites: !state.displayFavorites
            }
        default:
            return(state);
    };
}

export default favoritesReducer;