var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        };
    },
    handleSetCoundown: function (seconds) {
        this.setState({
            count: seconds
        });
    },
    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCoundown = {this.handleSetCoundown}/>
            </div>

        );
    }
});

module.exports = Countdown;