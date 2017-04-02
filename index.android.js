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


let MyFlexView = require('./a/MyFlexView');
let BrandView = require('./a/BrandView');
let LoginView = require('./a/LoginView');
let MyScrollView = require('./b/MyScrollView');

export default class first extends React.Component {
    render() {
        return <View>
            <MyScrollView/>
        </View>
    }
}

AppRegistry.registerComponent('first', ()=>first);