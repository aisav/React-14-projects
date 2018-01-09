var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var loc = this.refs.loc.value;

        if (typeof loc === 'string' && loc.length > 0) {
            this.refs.loc.value = '';
            updates.loc = loc;
        }

        this.props.onNewUpdateAtrF(updates);
    },

    render: function () {
        return (
            <div>
                <h1>Get Weather</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="loc" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <input type="submit" value="Get Weather"></input>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;