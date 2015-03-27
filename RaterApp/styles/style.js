var React = require('react-native');
var StyleSheet = React.StyleSheet;

var Style = StyleSheet.create({
    'collection': {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'tan'
    },
    'collection__item': {
        paddingVertical: 12,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    'collection__item--voted': {
        backgroundColor: "#dddddd"
    },
    'collection__item-text--voted': {
        color: "#707070",
    },
    'collection__item-button': {
        color: "grey",
        fontSize: 24,
        width: 24,
        flex: 1
    },
    'collection__item-button--selected': {
        color: "black",
    },
    'collection__item-text': {
        fontSize: 18,
        justifyContent: 'center',
        color: "#ffffff",
        flex: 4,
        textAlign: "center"
    },
    'container': {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#333333',
    },
    'bottomPane': {
        paddingVertical: 20
    },
    'welcome': {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#aaaaaa',
    },
    'instructions': {
        textAlign: 'center',
        color: '#aaaaaa',
    },
});
module.exports = Style;
