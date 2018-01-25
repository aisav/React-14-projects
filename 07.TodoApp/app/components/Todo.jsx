var React = require ('react');
var moment = require ('moment');

var Todo = React.createClass({

    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed ? 'todo todo-completed' : 'todo';
        var renderDate = () => {
            var message = 'Created ';
            var timeStamp = createdAt;

            if(completed) {
                message = 'Completed ';
                timeStamp = completedAt;
            }

            return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
        }
        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id)
            }}>
                <input type="checkbox" defaultChecked={completed} />
                <p className="todo__subtext">{text}</p>
                <p>{renderDate()}</p>
            </div>
        )
    }

});

module.exports = Todo;