/**
 * Sample React Native App
 * Created by Cai Wei on 4/2/2017.
 */
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// get screen width
let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;
let textWidth = screenWidth / 4;

/*export default class first extends React.Component {
 render() {
 return <View style={styles.container}>
 <Text style={[styles.textStyle,{backgroundColor:'#0f0'}]}>
 text1
 </Text>
 <Text style={[styles.textStyle,{backgroundColor:'#00F'}]}>
 text2
 </Text>
 <Text style={[styles.textStyle,{height:70}]}>
 text3
 </Text>
 <Text style={[styles.textStyle,{height:70}]}>
 text4
 </Text>
 <Text style={[styles.textStyle,{height:70}]}>
 text5
 </Text>
 </View>
 }
 }

 let styles = StyleSheet.create({
 container: {
 flexDirection: 'row',
 backgroundColor: '#FF0',
 flexWrap: 'wrap',
 justifyContent:'flex-end',
 alignItems: 'center'
 },
 textStyle: {
 width: textWidth,
 height: 40,
 backgroundColor: '#F00',
 margin: 10
 // flex:1
 }
 })*/

let BrandView = require('./BrandView');
let LoginView = require('./LoginView');

export default class first extends React.Component {
    render() {
        return <View>
            <LoginView/>
        </View>
    }
}

AppRegistry.registerComponent('first', ()=>first);