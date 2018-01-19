var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

    componentDidUpdate: function (prevProps, prevState) {
        if(this.state.countdownStatus != prevState.countdownStatus) {
            switch(this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
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
            var c =  this.state.count - 1;
            this.setState({
                count: c >= 0 ? c : 0
            });
            if(c==0) {
                this.setState({countdownStatus: 'stopped'})
            }
        }, 1000)
    },

    componentWillUnmount: function () {
        // console.log("component did unmount");
        clearInterval(this.timer);
        this.timer = undefined;
    },

    // componentWillUpdate: function (nextProps, nextState) {
    //     console.log("component will mount");
    // },
    //
    // componentWillMount: function () {
    //     console.log("component will mount");
    // },
    //
    // componentDidMount: function () {
    //     console.log("component did mount");
    // },
    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },

    render: function () {
        var {count, countdownStatus} = this.state;
        var renderControlArea =  () => {
            if(countdownStatus !== "stopped") {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            }
            else {
                return <CountdownForm onSetCoundown = {this.handleSetCountdown}/>
            }

        }
        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>

        );
    }
});

module.exports = Countdown;