var redux = require('redux');

console.log("22Starting Redux");

var stateDefault = {
    name: 'Anonymous',
    showCompleted: false,
    todos: []
}

var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    console.log('=======Calling Action===========', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
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
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',      //action name
    name: 'Artur'
});

store.dispatch({
    type: 'CHANGE_NAME',      //action name
    name: 'Tom'
});


