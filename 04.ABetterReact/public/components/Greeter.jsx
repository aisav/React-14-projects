var React = require('react');

var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!',

        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewUpdate: function (updates) {
        this.setState(updates);
    },

    render: function () {
        var message = this.state.message;
        var name = this.state.name;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewUpdate={this.handleNewUpdate}/>
            </div>
        );
    }
});

module.exports = Greeter;