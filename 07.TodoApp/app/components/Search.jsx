var React = require('react');

var Search = React.createClass({
    handleSearch: function () {
        var searchText = this.refs.searchText.value;
        var showCompleted = this.refs.showCompleted.checked;

        this.props.onSearch(showCompleted,searchText);

    },

    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <div>
                    <input type="search" placeholder="Search todos" ref="searchText" onChange={this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                    Show Competed todos
                </div>
            </div>
        )
    }

});

module.exports = Search;