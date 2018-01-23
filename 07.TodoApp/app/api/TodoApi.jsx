var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if($.inArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        return todos; //same argument

    },
    getTodos: function () {
        var todosString = localStorage.getItem('todos');
        var todos;

        try {
            todos = JSON.parse(todosString);
        }
        catch(e) {

        }
        return $.isArray(todos) ? todos: [];
    },
    
    filterTodos: function (todos, showCompleted, searchText) {

        // by showCompleted
        var filteredTodos= todos.filter( (todo) => {
            return !todo.completed || showCompleted;
        });

        // by searchText
        if(searchText && searchText.length>0) {
            filteredTodos = filteredTodos.filter( (todo) => {
                return todo.text.toLowerCase().indexOf(searchText)===-1 ? false: true;
            })
        }

        // sorting
        filteredTodos.sort(  (a, b) => {
            if(!a.completed && b.completed) {
                return -1;
            }
            if(a.completed && !b.completed) {
                return 1;
            }
            return 0;
        });

        return filteredTodos;

    }
}