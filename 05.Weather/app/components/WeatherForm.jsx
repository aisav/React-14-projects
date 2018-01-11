var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var location = this.refs.location.value;

        if (typeof location === 'string' && location.length > 0) {
            this.refs.location.value = '';
            updates.location = location;
        }

        this.props.onNewUpdateAtrF(updates);
    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="location" placeholder="Enter city name"/>
                    </div>
                    <div>
                        <input type="submit" className="button expanded hollow" value="Get Weather"></input>
                    </div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;