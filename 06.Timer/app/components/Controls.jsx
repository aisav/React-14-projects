var React = require('react');

var Controls = React.createClass({

    propType: {
        countDownStatus: React.PropTypes.string.isRequired
    },

    render: function () {

        var {countDownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countDownStatus === 'started') {
                return <button className="button secondary">Pause</button>
            }
            else if (countDownStatus === 'stopped') {
                return <button className="button primary">Start</button>
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
});

module.exports = Controls;