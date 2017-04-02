/**
 * Created by Cai Wei on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
}from 'react-native';

let ScreenWidth = require('Dimensions').get('window').width;

class MyScrollView extends Component {
    renderChild = () => {
        let data = ['red', 'green', 'blue', 'yellow'];
        return data.map((item, i)=> {
            return <View key={`item${i}`} style={{backgroundColor:item,width:ScreenWidth,height:200}}>
                <Text style={styles.textStyle}>{i}</Text>
            </View>
        });
    }

    render() {
        return <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}>
            {this.renderChild()}
        </ScrollView>
    }
}

let styles = StyleSheet.create({
    textStyle: {
        margin: 10,
        fontSize:30,
        borderBottomWidth:3,
        borderColor:'white'
        // flex:1
    }
})

module.exports = MyScrollView;