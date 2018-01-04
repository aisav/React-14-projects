// import React from 'react';
// import ReactDOM from 'react-dom';

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React'
        };
    },
    render: function () {
        var name = this.props.name;
/*        return React.createElement(
            'h1',
            null,
            'Hello React.createElement'
        );*/
        return (
            <div>
                <h1>Hello {name} !!!</h1>
                <p>This is from component too</p>
            </div>
        );
    }
});

var firstname = "Artur"

ReactDOM.render(
    <Greeter name={firstname}/>,
    //<Greeter />,        //with default atribute name, its value is React, on line 7:

    document.getElementById("app")
)