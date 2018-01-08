var React = require('react');

var Nav = require('Nav');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Main Component</h2>
                <Nav/>
            </div>
        );
    }
});

module.exports = Main;