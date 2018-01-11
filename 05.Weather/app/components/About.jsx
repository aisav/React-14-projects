var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

var About = (props) => {
    return (
        <div>
            <h3 className="text-center page-title">About</h3>
            <p>This is a weather application, build on React.
                Created by Artur Isaverdyan</p>
        </div>
    );
}

module.exports = About;