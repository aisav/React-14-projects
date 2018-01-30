var redux = require('redux');

console.log("22Starting Redux");

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: []
}

var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    console.log('=======Calling Action===========', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };

        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]

            };

        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter( (hobby) => {
                    return hobby.id !== action.id
                })
            }

        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        janre: action.janre
                    }
                ]
            };

        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter( (movie) => {
                    return movie.id !== action.id
                })
            }

        default:
            return state;
    }
};
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

store.dispatch({
    type: 'CHANGE_NAME',      //action name
    name: 'Artur'
});

store.dispatch({
    type: 'ADD_HOBBY',      //action name
    hobby: 'running'
});

store.dispatch({
    type: 'ADD_HOBBY',      //action name
    hobby: 'walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',      //action name
    id: 2
});

store.dispatch({
    type: 'CHANGE_NAME',      //action name
    name: 'Tom'
});

store.dispatch({
    type: 'ADD_MOVIE',      //action name
    title: 'the title',
    janre: 'the janre'
});

store.dispatch({
    type: 'ADD_MOVIE',      //action name
    title: 'the title2222',
    janre: 'the janre2222'
});

store.dispatch({
    type: 'REMOVE_MOVIE',      //action name
    id: 1
});


