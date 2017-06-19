/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');


var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class HelloWorld extends React.Component {
  render() {
    return React.createElement(ReactNative.Text, {style: styles.text}, "Hello World! (Again)");
  }
}
class PropertyFinderApp extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}
var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});
ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });
