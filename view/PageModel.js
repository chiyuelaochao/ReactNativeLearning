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

class PageModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    renderChild = () => {
        let data = [1, 2, 3, 4, 5];
        return data.map((item, i)=> {
            return <View key={`item${i}`} style={styles.container}>
                <Image source={{uri:baseUrl+item+url}} style={styles.imageStyle}/>
                <TouchableOpacity activeOpacity={0.5} onPress={this.onPress}>
                    <View style={styles.textWrapperStyle}>
                        <Text style={styles.priceTextStyle}>{item}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        });
    }

    render() {
        return <View>
            <Text>PageModel page is ok!</Text>
        </View>
    }

    startTimer = ()=> {
        this.timer = setInterval(()=> {
            this.setState({currentPage: 1});
            console.log("timer: " + currentpage);
        }, 2000);
    }

    componentDidMount = ()=> {
        // this.startTimer();
    }
    
    componentWillUnmount = ()=> {
        clearInterval(this.timer);
    }
}

let styles = StyleSheet.create({
    container: {
        width: ScreenWidth,
        height: 110,
        flexDirection: 'row',
        padding: 5,
    }
})

module.exports = PageModel;