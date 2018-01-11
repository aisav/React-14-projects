var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({

    getInitialState: function () {
        return {
            isLoading: false
        };
    },

    handleNewUpdate: function (updates) {
        // debugger;
        this.setState({isLoading: true});
        OpenWeatherMap.getTemp(updates.loc).then(
            (temp) => {
                updates.temp = temp;
                this.setState(updates);
                this.setState({isLoading: false});
            },
            (err) => {
                this.setState({isLoading: false});
                alert(err);
            }
        )
    },

    render: function () {
        var {isLoading, loc, temp} = this.state;

        function renderWeather() {
            if (isLoading) {
                return (<h3 className="text-center">Loading...</h3>);
            }
            else if (temp && loc) {
                return (                    <WeatherMessage loc={loc} temp={temp}/>);
            }
        }

        return (
            <div>
                <h3 className="text-center page-title">Get Weather</h3>
                <WeatherForm onNewUpdateAtrF={this.handleNewUpdate}/>
                {renderWeather()}
            </div>
        );

    }
});

module.exports = Weather;