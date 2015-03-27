var React = require('react-native');
var Button = require('react-native-button');
var CollectionItem = require('./CollectionItem');

var {
    View,
    ListView,
} = React;
var Style = require('../styles/style');

var Collection = React.createClass({
    getDefaultProps: function() {
        return {
            items: [],
            handleVote: function(){}
        };
    },
    getInitialState: function() {
        return {
            itemsVoted: [],
            itemsVotes: []
        }
    },
    render: function() {
        var rows = this.props.items.map(function(item, index) {
            item.index = index;
            return item;
        });
        var ds = new ListView.DataSource({
            rowHasChanged: function(r1, r2) {
                return r1 !== r2;
            }
        });
        var dataSource = ds.cloneWithRows(rows);
        return (
            <ListView
                dataSource={dataSource}
                renderRow={this._renderItem}
                style={Style.collection}
            />
        );
    },
    _renderItem: function(item) {
        return (
            <CollectionItem
                index={item.index}
                text={item.name}
                hasVoted={this.state.itemsVoted.indexOf(item.index) > -1}
                selectedVote={this.state.itemsVotes[item.index]}
                handlePress={this._handleItemPress}
                handleVote={this._handleItemVote}/>
        )
    },
    _handleItemPress: function(name,index) {
        console.log(index,name);
    },
    _handleItemVote: function(index,vote) {
        var itemsVoted = this.state.itemsVoted
        itemsVoted.push(index);
        var itemsVotes = this.state.itemsVotes;
        itemsVotes[index] = vote;
        this.setState({itemsVoted: itemsVoted, itemsVotes: itemsVotes});
        return this.props.handleVote(index,vote);
    }
});

module.exports = Collection;
