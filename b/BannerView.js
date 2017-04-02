/**
 * Created by Administrator on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
}from 'react-native';

let ScreenWidth = require('Dimensions').get('window').width;
var JsonData = require('./test2.json');

class BannerView extends Component {
    renderChild = () => {
        return JsonData.data.map((item, i)=> {
            return <View key={`item${i}`} style={{backgroundColor:'yellow',width:ScreenWidth,height:200}}>
                <Text>{item.title}</Text>
            </View>
        });
    }
    renderCircles = ()=> {
        return JsonData.data.map((item, i)=> {
            return <Text key={`item${i}`}>&bull;</Text>
        });
    }

    render() {
        return <View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}>
                {this.renderChild()}
            </ScrollView>
            <View style={styles.circleWrapperStyle}>
                {this.renderCircles()}
            </View>
        </View>
    }
}

let styles = StyleSheet.create({
    circleWrapperStyle: {
        flexDirection: 'row',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        left: 10
    }
})

module.exports = BannerView;