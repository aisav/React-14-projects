var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm')

var Countdown = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: "stopped"
        };
    },
    handleSetCoundown: function (seconds) {
        this.setState({
            count: seconds,
            timerStatus: 'started'
        });
    },
    componentDidUpdate: function (prevProps, prevState) {
        if(prevState.timerStatus != this.state.timerStatus) {
            switch(this.state.timerStatus){
                case 'started':
                    this.startTimer();
                    break;
            }
        }
    },
    startTimer: function () {

        this.timer = setInterval(() => {
            var c =  this.state.count - 1;
            this.setState({
                count: c >= 0 ? c : 0
            })
        }, 1000)
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