var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function () {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },

    handleStatusChange: function (newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.timerStatus != prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                case  'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(() => {
            if (this.state.timerStatus == 'stopped') {

            }
            var c = this.state.count + 1;
            this.setState({
                count: c
            });
        }, 1000)
    },

    starting: function () {
        this.setState({timerStatus: 'started'});
    },

    render: function () {
        var {count, timerStatus} = this.state;
        var renderControlArea = () => {
            if (timerStatus !== "stopped") {
                return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            }
            else {
                return <button className="button expanded" onClick={this.starting}>start</button>
            }

        }

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>

        );
    }
});

module.exports = Timer;