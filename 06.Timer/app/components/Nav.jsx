var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;
        var encodedLocation = encodeURIComponent(location);
        if (location) {
            this.refs.location.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Timer with React</li>
                        <li>
                            <IndexLink to="/" activeClassName="active"
                                       activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/coundown" activeClassName="active"
                                  activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <div>
                        <ul className="menu">
                            <li className="menu-text">
                                Created by
                                <a href="https://www.linkedin.com/in/artur-isaverdyan-444b9899/" target="_blank">
                                    Artur Isaverdyan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
});

module.exports = Nav;