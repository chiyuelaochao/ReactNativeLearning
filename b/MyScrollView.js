/**
 * Created by Cai Wei on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
}from 'react-native';

let ScreenWidth = require('Dimensions').get('window').width;
let baseUrl = 'https://raw.githubusercontent.com/chiyuelaochao/ReactNativeLearning/master/images/w_';
let url = '.jpg';

class MyScrollView extends Component {
    onPressLogin = ()=> {
        console.log('onPress');
    }

    renderChild = () => {
        let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
        return data.map((item, i)=> {
            return <View key={`item${i}`} style={styles.viewWrapperStyle}>
                <Image source={{uri:baseUrl+item+url}} style={styles.imageStyle}/>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onPress}>
                    <View style={styles.textWrapperStyle}>
                        <Text>这里是它的名字，可能还比较长，不知道能不能在一行完全显示。。。</Text>
                        <Text style={styles.priceTextStyle}>{item + '元'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        });
    }

    render() {
        return <ScrollView
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            pagingEnabled={false}>
            {this.renderChild()}
        </ScrollView>
    }
}

let styles = StyleSheet.create({
    viewWrapperStyle: {
        width: ScreenWidth,
        height: 110,
        flexDirection: 'row',
        padding: 5,
    },
    textWrapperStyle: {
        flex: 1,
        height: 100,
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    imageStyle: {
        width: 100,
        height: 100
        // margin: 10,
        // fontSize: 30,
        // borderBottomWidth: 3,
        // borderColor: 'white'
        // flex:1
    },
    priceTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
})

module.exports = MyScrollView;