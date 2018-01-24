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
            <div className="container__footer">
                <form ref="form" onSubmit={this.newTodo}>
                    <div>
                        <input type="text" ref="text" placeholder="What do You need to do?"/>
                    </div>
                    <div>
                        <button className="button expanded">Add Todo</button>
                    </div>
                </form>
            </div>
        );

    }
});

module.exports = AddTodo;