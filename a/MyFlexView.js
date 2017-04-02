/**
 * Created by Cai Wei on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';

let windowWidth = require('Dimensions').get('window').width;
let textWidth = windowWidth / 4;
class MyFlexView extends Component {
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
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textStyle: {
        width: textWidth,
        height: 40,
        backgroundColor: '#F00',
        margin: 10
        // flex:1
    }
})

module.exports = MyFlexView;