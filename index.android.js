/**
 * Sample React Native App
 * Created by Cai Wei on 4/2/2017.
 */
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';


let MyFlexView = require('./a/MyFlexView');
let BrandView = require('./a/BrandView');
let LoginView = require('./a/LoginView');
let BannerView = require('./b/BannerView');

export default class first extends React.Component {
    render() {
        return <View>
            <BannerView/>
        </View>
    }
}

AppRegistry.registerComponent('first', ()=>first);