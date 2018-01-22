var React = require('react');

var AddTodo = React.createClass({


    newTodo: function (e) {

        e.preventDefault();
        var text = this.refs.text.value;
        if (text.length > 0) {
            this.refs.text.value = '';
            this.props.onNewTodo(text);
        }
        else {
            this.refs.text.focus;
        }

    },

    render: function () {
        var {totalSeconds} = this.props;

        return (
            <div>
                <form ref="form" onSubmit={this.newTodo}>
                    <input type="text" ref="text" placeholder="What do You need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );

    }
});

module.exports = AddTodo;