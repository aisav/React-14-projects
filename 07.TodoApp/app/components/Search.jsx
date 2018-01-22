var React = require('react');

var Search = React.createClass({
    handleSearch: function () {
        var searchText = this.refs.searchText;
        var searchCompleted = this.refs.searchCompleted.checked;

        this.props.onSearch(searchCompleted,searchText);

    },

    render: function () {
        var {id, text} = this.props;
        return (
            <div>
                <div>
                    <input type="search" placeholder="Search todos" ref="searchText" onchange={this.handleSearch}/>
                </div>
                <div>
                    <input type="checkbox" ref="searchCompleted" onchange={this.handleSearch}/>
                    Show Competed todos
                </div>
            </div>
        )
    }

});

module.exports = Search;