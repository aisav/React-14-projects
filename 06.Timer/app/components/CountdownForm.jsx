var React = require ('react');
var Controls = require ('Controls');

var CountdownForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if(strSeconds.match(/[0-9]+/)){
            debugger;
            this.refs.seconds.value = '';
            this.props.onSetCoundown(parseInt(strSeconds,10));
        }
    },
    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.onFormSubmit} className="coundown-form">
                    <input type="text" ref="seconds" placeholder="Enter Time in seconds" />
                    <button className="button expanded">Start</button>
                    <Controls countDownStatus="stopped" onClear />
                </form>
            </div>
        )
    }
});

module.exports = CountdownForm;