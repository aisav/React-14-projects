var React = require('react');

var AddTodo = React.createClass({
    getDefaultProps: function () {
        return {
            totalSeconds: 0
        }
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (totalSeconds) {
        var m = Math.floor(totalSeconds / 60);
        var s = totalSeconds % 60;

        m = (m < 10) ? ('0' + m) : m;
        s = (s < 10) ? ('0' + s) : s;
        return m + ':' + s;
    },

    render: function () {
        var {totalSeconds} = this.props;

        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="coundown-form">
                    <input type="text" ref="todo" placeholder="What do You need to do?" />
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );

    }
});

module.exports = AddTodo;