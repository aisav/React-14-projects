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

    console.log('====================================handle change', state);

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
    type: 'CHANGE_NAME',      //action name
    name: 'Tom'
});

store.dispatch({
    type: 'ADD_MOVIE',      //action name
    title: 'the title',
    janre: 'the janre'
});


