var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuidV1 = require('uuid/v1');
var Search = require('Search');
var TodoApi = require('TodoApi');

var Main = React.createClass({
    getInitialState: function () {
        return {
            searchCompleted: false,
            searchText: '',
            todos: TodoApi.getTodos()
        }
    },
    componentDidUpdate: function () {
        TodoApi.setTodos(this.state.todos)
    },

    handleToggle: function (id) {
        var updatedTodos = this.state.todos.map(function (todo) {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState(updatedTodos);
    },

    handleSearch: function (searchCompleted, searchText) {
        this.setState({
            searchCompleted: searchCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    handleNewTodo: function (text) {
        var t = {
            id: uuidV1(),
            text: text,
            completed: false
        };
        this.setState({
            todos: [
                ...this.state.todos,
                t
            ]
        })


    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle} />
                <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
        )
    }

});

module.exports = Main;