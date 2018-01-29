var redux = require('redux');

console.log("22Starting Redux");

var stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: []
}

var reducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
    console.log('New Action', action);
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
        }
        case 'CHANGE-SEARCHTEXT':
            return {
                ...state,
                searchText:  action.searchText
            }
        default:
            return state;
    }
};
var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('currentState', currentState);

var action = {
    type: 'CHANGE_NAME',      //action name
    name: 'Artur'
}

store.dispatch(action);

console.log('Name should be Artur', store.getState().name);

store.dispatch({
    type: 'CHANGE-SEARCHTEXT',
    searchText: 'abcd'
});

console.log('searchText should be abcd', store.getState().searchText);
