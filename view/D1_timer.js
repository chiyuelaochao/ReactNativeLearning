/**
 * Created by Cai Wei on 4/4/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Touchable,
    TouchableOpacity,
    TouchableHighlight
}from 'react-native';

let ScreenWidth = require('Dimensions').get('window').width;

class D1_timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timerNumber: 0,
            isStart: false,
            recordHistory: []
        }
    }

    renderChild = () => {
        return this.state.recordHistory.map((item, i)=> {
            return <View key={`item${i}`}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onRecordItemPress}>
                    <View style={styles.textRecordStyle}>
                        <Text style={styles.recordTextStyle}>{i + 1} {this.formatTime(item)}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        });
    }
    onRecordItemPress = ()=> {
        console.log('onRecordItemPress');
    }

    onButtonPress = (key, event)=> {
        console.log(key);
        if (key === "start") {
            if (this.state.isStart) {
                clearInterval(this.interval);
            } else {
                this.interval = setInterval(()=>this.setState({timerNumber: this.state.timerNumber + 1}), 10);
            }
            this.setState({isStart: !this.state.isStart});
        } else if (key === "rest") {
            clearInterval(this.interval);
            this.setState({timerNumber: 0});
            this.setState({isStart: false});
        } else if (key === "record") {
            if (this.state.isStart) {
                this.state.recordHistory.push(this.state.timerNumber);
                console.log(this.state.timerNumber);
            }
        } else if (key === "clear") {
            if (this.state.recordHistory.length > 0) {
                this.setState({recordHistory: []});
            }
        }

    }

    render() {
        return <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text ref='display' style={styles.displayText}>{this.formatTime(this.state.timerNumber)}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onButtonPress.bind(this,'start')}>
                    <View
                        style={[styles.buttonWrapperStyle,{backgroundColor:this.state.isStart ? '#FF4500' : '#FFA500'}]}>
                        <Text style={styles.buttonStyle}>{this.state.isStart ? 'Stop' : 'Start' }</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onButtonPress.bind(this,'rest')}>
                    <View style={[styles.buttonWrapperStyle,{backgroundColor:'#40E0D0'}]}>
                        <Text style={styles.buttonStyle}>Rest</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onButtonPress.bind(this,'record')}>
                    <View style={[styles.buttonWrapperStyle,{backgroundColor:'#7FFF00'}]}>
                        <Text style={styles.buttonStyle}>Record</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onButtonPress.bind(this,'clear')}>
                    <View style={[styles.buttonWrapperStyle,{backgroundColor:'#C0C0C0'}]}>
                        <Text style={styles.buttonStyle}>Clear</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.recordContainer}>
                {this.renderChild()}
            </ScrollView>
        </View>
    }


    formatTime = (t)=> {
        let msec = appendZero(t % 100);
        let sec = appendZero(parseInt((t / 100) % 60));
        let min = appendZero(parseInt((t / 6000) % 60));
        let hour = appendZero(parseInt(t / 360000));
        return `${hour}:${min}:${sec}.${msec}`;
    }

    componentWillUnmount = ()=> {
        clearInterval(this.interval);
    }
}

const appendZero = n => n.toLocaleString({}, {minimumIntegerDigits: 2});

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: ScreenWidth,
        padding: 5
    },

    displayContainer: {
        width: ScreenWidth,
        marginBottom: 30,
        marginTop: 30
    },

    displayText: {
        width: ScreenWidth,
        fontSize: 25,
        textAlign: 'center'
    },

    buttonContainer: {
        flexDirection: 'row',
        width: ScreenWidth,
        height: 60,
        justifyContent: 'center'
    },

    buttonWrapperStyle: {
        height: 50,
        width: ScreenWidth / 5,
        backgroundColor: 'orange',
        margin: 5,
        borderRadius: 8,
        justifyContent: 'center'
    },

    buttonStyle: {
        textAlign: 'center'
    },

    textRecordStyle: {
        flexDirection: 'column',
        height: 25,
        justifyContent: 'center'

    },

    recordContainer: {
        width: ScreenWidth,
        backgroundColor: '#D3D3D3',
        borderRadius: 10
    },

    recordTextStyle: {
        fontSize: 20,
        padding: 3,
        textAlign: 'center'
    }

});

module.exports = D1_timer;