var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuidV1 = require('uuid/v1');

var Main = React.createClass({
    getInitialState: function () {
        return {
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
                <TodoList todos={todos} />
                <AddTodo onNewTodo={this.handleNewTodo}/>
            </div>
        )
    }

});

module.exports = Main;