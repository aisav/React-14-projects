
var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!'
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var prm = this.refs.prm.value;
        alert(prm);

    },
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
/*        return React.createElement(
            'h1',
            null,
            'Hello React.createElement'
        );*/
        return (
            <div>
                <h1>Hello {name} !!!</h1>
                <p>{message + '!!'}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="prm"/>
                    <button >Click Me</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Artur';

ReactDOM.render(
    <Greeter name={firstName}/>,
    //<Greeter />,        //with default atribute name, its value is React, on line 7:
    document.getElementById("app")
);