/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var Collection = require('./components/Collection');
var styles = require('./styles/style');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

var RaterApp = React.createClass({
    getInitialState: function() {
        return {
            'input': '',
            'collectionItems': [],
            votes: {}
        };
    },
    componentWillMount: function() {
        this.getData();
    },
    getData: function() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/api/collection/4', true);
        request.onload = function() {
            var collectionData = JSON.parse(request.responseText);
            this.setState({collectionItems: collectionData.items});
        }.bind(this);
        request.send();
    },
    postVote: function() {
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:3000/api/votes/4', true);
        request.onload = function() {
            console.log(request.responseText);
            // var collectionData = JSON.parse(request.responseText);
            // this.setState({collectionItems: collectionData.items});
        }.bind(this);
        request.send();
    },
    render: function() {
        console.log(this.state.votes);
        return (
          <View style={styles.container}>
              <Text style={styles.welcome}>
                  RSL Soapbox player rater!
              </Text>
            <Collection
                items={this.state.collectionItems}
                handleVote={this._handleVote}
            />
            <View style={styles.bottomPane}>
                <Button style={{color: 'green'}} onPress={this._handleSubmit}>
                    Vote ({Object.keys(this.state.votes).length}) of ({this.state.collectionItems.length})
                </Button>
            </View>
          </View>
        );
    },
    _handleVote: function(index, vote) {
        var votes = this.state.votes;
        votes[index] = vote;
        this.setState({votes: votes});
    },
    _handleSubmit: function(index, vote) {
        this.postVote();
    }
});


AppRegistry.registerComponent('RaterApp', () => RaterApp);
