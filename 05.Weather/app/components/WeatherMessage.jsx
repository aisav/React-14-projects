var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {loc, temp} = this.props;
//
//         return (
//             <div>
//                 <h3>It is {temp}°C in {loc}</h3>
//             </div>
//         );
//     }
// });

var WeatherMessage = ({loc, temp}) => {

    // var {loc, temp} = props;

    return (
        <div>
            <h3>It is {temp}°C in {loc}</h3>
        </div>
    );
}

module.exports = WeatherMessage;