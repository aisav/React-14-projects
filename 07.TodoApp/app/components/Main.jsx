var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuidV1 = require('uuid/v1');
var Search = require('Search');

var Main = React.createClass({
    getInitialState: function () {
        return {
            searchCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuidV1(),
                    text: "Task A"
                },
                {
                    id: uuidV1(),
                    text: "Task B"
                }
            ]
        }
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
            text: text
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
                <TodoList todos={todos} />
                <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
        )
    }

});

module.exports = Main;