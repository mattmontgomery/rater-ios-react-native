var React = require('react-native');
var Button = require('react-native-button');
var {
    Text,
    View,
    Image
} = React;
var Style = require('../styles/style');
var CollectionItem = React.createClass({
    propTypes: {
        hasVoted: React.PropTypes.bool
    },
    getDefaultProps: function() {
        return {
            text: '',
            index: -1,
            hasVoted: false,
            selectedVote: null,
            handlePress: function() {},
            handleVote: function() {},
        };
    },
    render: function() {
        return (
            <View style={[Style.collection__item, this.props.hasVoted && Style['collection__item--voted']]}>
                <Button
                    style={[Style['collection__item-button'], (this.props.selectedVote === 0) && Style['collection__item-button--selected']]}
                    onPress={this.props.handleVote.bind(null,this.props.index,0)}
                >0</Button>
                <Text style={[Style['collection__item-text'], this.props.hasVoted && Style['collection__item-text--voted']]}>{this.props.text}</Text>
                    <Button
                        style={[Style['collection__item-button'], (this.props.selectedVote === 1) && Style['collection__item-button--selected']]}
                        onPress={this.props.handleVote.bind(null,this.props.index,1)}
                    >1</Button>
            </View>
        );
    },
});

module.exports = CollectionItem;
