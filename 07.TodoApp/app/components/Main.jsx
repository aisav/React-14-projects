var React = require('react');
var TodoList = require('TodoList');

var Main = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: "Task A"
                },
                {
                    id: 2,
                    text: "Task B"
                }
            ]
        }
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }

});

module.exports = Main;