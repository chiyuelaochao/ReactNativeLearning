/**
 * Created by Cai Wei on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity
}from 'react-native';

let windowWidth = require('Dimensions').get('window').width;

class LoginView extends Component {
    onPressLogin = ()=> {
        console.log('onPressLogin');
    }

    render() {
        return <View style={styles.container}>
            <Image source={require('./../images/batman.jpg')} style={styles.imageStyle}></Image>
            <View style={styles.inputWrapperStyle}>
                <TextInput placeholder='Please input QQ nunber' style={styles.inputStyle}
                           keyboardType='numeric'></TextInput>
            </View>
            <View style={styles.inputWrapperStyle}>
                <TextInput placeholder='Please input Password' style={styles.inputStyle}
                           secureTextEntry={true}></TextInput>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={this.onPressLogin}>
                <View style={styles.textWrapperStyle}>
                    <Text style={{color:'#FFF',textAlign:'center',flex:1}}>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
}
let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#F00',
        marginTop: 30,
        marginBottom: 30,
    },
    inputWrapperStyle: {
        flexDirection: 'row',
        width: windowWidth / 2

    },
    inputStyle: {
        flex: 1,
        textAlign: 'center'
    },
    textWrapperStyle: {
        flexDirection: 'row',
        backgroundColor: '#87CEFA',
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 8,
        height: 30,
        width: windowWidth - 30,
        marginTop: 20,
    }
});

module.exports = LoginView;