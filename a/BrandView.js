/**
 * Created by Cai Wei on 4/2/2017.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

let JsonData = require('./../data.json');

let brandWidth = require('Dimensions').get('window').width / 3;

class BrandView extends Component {
    renderBrands = ()=> {
        return JsonData.data.map((item, i) => {
            return <View key={`wrapper${i}`} style={styles.wrapperStyle}>
                <Image source={require('./../images/icon7.png')} style={styles.imageStyle}></Image>
                <Text>{item.title}</Text>
            </View>
        });
    }

    render() {
        return <View style={styles.container}>
            {this.renderBrands() }
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    wrapperStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        width: brandWidth,
        height: 100
    },
    imageStyle: {
        width: 80,
        height: 80
    }
});
module.exports = BrandView;