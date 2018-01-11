var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {location, temp} = this.props;
//
//         return (
//             <div>
//                 <h3>It is {temp}°C in {location}</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = ({location, temp, err}) => {

    // var {location, temp} = props;

    if(err) {
        return (
            <div><h3>{err}</h3></div>
        )
    }
    return (
        <div>
            <h3 className="text-center">It is {temp}°C in {location}</h3>
        </div>
    );
}

module.exports = WeatherMessage;