var redux = require('redux');

console.log("22Starting Redux");


// var oldReducer = (state = stateDefault, action) => {
//     // state = state || {name: 'Anonymous'};
//     console.log('=======Calling Action===========', action);
//     switch (action.type) {
//         case 'CHANGE_NAME':
//             return {
//                 ...state,
//                 name: action.name
//             };
//
//         case 'ADD_HOBBY':
//             return {
//                 ...state,
//                 hobbies: [
//                     ...state.hobbies,
//                     {
//                         id: nextHobbyId++,
//                         hobby: action.hobby
//                     }
//                 ]
//
//             };
//
//         case 'REMOVE_HOBBY':
//             return {
//                 ...state,
//                 hobbies: state.hobbies.filter((hobby) => {
//                     return hobby.id !== action.id
//                 })
//             }
//
//         case 'ADD_MOVIE':
//             return {
//                 ...state,
//                 movies: [
//                     ...state.movies,
//                     {
//                         id: nextMovieId++,
//                         title: action.title,
//                         janre: action.janre
//                     }
//                 ]
//             };
//
//         case 'REMOVE_MOVIE':
//             return {
//                 ...state,
//                 movies: state.movies.filter((movie) => {
//                     return movie.id !== action.id
//                 })
//             }
//
//         default:
//             return state;
//     }
// };


////////////////////////////////////////////////////////////////
var nameReducer = (state = 'Anonymous', action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
}


////////////////////////////////////////////////////////////////////////////////
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_HOBBY' :
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }

            ]

        case  'REMOVE_HOBBY':
            return state.filter((hobby) => {
                return hobby.id !== action.id
            })
        default:
            return state;
    }
}

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}


////////////////////////////////////////////////////////////////////////////////////////////
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE' :
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    janre: action.janre
                }

            ]
        case  'REMOVE_MOVIE':
            return state.filter((movie) => {
                return movie.id !== action.id
            })
        default:
            return state;

    }
}

var addMovie = (title, janre) => {
    return {
        type: 'ADD_MOVIE',
        title,
        janre
    }
}

var removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}

var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Listening  changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    document.getElementById('app').innerHTML = state.name;

    console.log('====================================after change', state);

});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Artur'));

store.dispatch(addHobby('runing'));

store.dispatch(addHobby('walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Tom'));

store.dispatch(addMovie('ttt','jjj'));

store.dispatch(addMovie('tttttttt', 'jjjjjjjjjj'));

store.dispatch(removeMovie(1));


