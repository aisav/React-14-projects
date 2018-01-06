var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});


var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (typeof name === 'string' && name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (typeof message === 'string' && message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewUpdate(updates);

    },

    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="text" ref="name" placeholder="Enter name"/>
                    </div>
                    <div>
                        <textarea ref="message" placeholder="Enter message"></textarea>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
});


var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'This is the default message!',

        };
    },

    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },

    handleNewUpdate: function (updates) {
        this.setState(updates);
    },

    render: function () {
        var message = this.state.message;
        var name = this.state.name;
        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewUpdate={this.handleNewUpdate}/>
            </div>
        );
    }
});


ReactDOM.render(
    <Greeter/>,
    document.getElementById("app")
);