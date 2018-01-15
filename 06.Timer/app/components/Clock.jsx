var React = require('react');

var Clock = React.createClass({
    formatSeconds: function (seconds) {
        var m = Math.floor(seconds/60);
        var s = seconds%60;

        m = (m<10) ? ('0' + m) : m;
        s = (s<10) ? ('0' + s) : s;
        return m + ':' + s;
    },

    render: function () {
        var totalSeconds = this.props.seconds;

        return (
            <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
            </div>
        );

    }
});

module.exports = Clock;