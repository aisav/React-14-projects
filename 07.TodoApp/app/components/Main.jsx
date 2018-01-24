var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuidV1 = require('uuid/v1');
var Search = require('Search');
var TodoApi = require('TodoApi');
var moment = require('moment');

var Main = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
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
                todo.completedAt = moment().unix()
            }
            return todo;
        });
        this.setState(updatedTodos);
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },

    handleNewTodo: function (text) {
        var t = {
            id: uuidV1(),
            text: text,
            completed: false,
            createdAt: moment().unix()
        };
        this.setState({
            todos: [
                ...this.state.todos,
                t
            ]
        })


    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <Search onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
                <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
        )
    }

});

module.exports = Main;