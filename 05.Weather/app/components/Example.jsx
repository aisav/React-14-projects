var React = require('react');
var {Link} = require('react-router');

// var Example = React.createClass({
//     render: function () {
//         return (
//             <h3>Example Component</h3>
//         );
//     }
// });

var Example = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are some example locations to try out </p>
            <ol>
                <li>
                    <Link to={'/?location=Yerevan'}>Yerevan</Link>
                </li>
                <li>
                    <Link to={'/?location=London'}>London</Link>
                </li>
                <li>
                    <Link to={'/?location=Goris'}>Goris</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Example;