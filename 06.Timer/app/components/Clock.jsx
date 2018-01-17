var React = require('react');

var Clock = React.createClass({
    getDefaultProps: function () {
        return {
            totalSeconds: 0
        }
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (totalSeconds) {
        // debugger;
        var m = Math.floor(totalSeconds / 60);
        var s = totalSeconds % 60;

        m = (m < 10) ? ('0' + m) : m;
        s = (s < 10) ? ('0' + s) : s;
        return m + ':' + s;
    },

    render: function () {
        var {totalSeconds} = this.props;

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