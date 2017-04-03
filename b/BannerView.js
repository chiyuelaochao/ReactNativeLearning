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
let MyScrollView = require('./MyScrollView');

let ScreenWidth = require('Dimensions').get('window').width;
var JsonData = require('./test2.json');
let baseUrl = 'https://raw.githubusercontent.com/chiyuelaochao/ReactNativeLearning/master/images/';
class BannerView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        }
    }

    renderChild = () => {
        return JsonData.data.map((item, i)=> {
            return <View key={`item${i}`} style={{backgroundColor:'yellow',width:ScreenWidth,height:180}}>
                <Image source={{uri:baseUrl+item.img}} style={styles.imageStyle}/>
                <Text style={styles.titleStyle}>{item.title}</Text>
            </View>
        });
    }

    renderCircles = ()=> {
        return JsonData.data.map((item, i)=> {
            let currentCircleStyle = {color: this.state.currentPage === i ? 'red' : '#FFF'};
            return <Text key={`item${i}`} style={[styles.circleStyle,currentCircleStyle]}>&bull;</Text>
        });
    }

    handleScroll = (evet)=> {
        var x = evet.nativeEvent.contentOffset.x;
        // console.log(x);
        var currentPage = Math.floor(x / ScreenWidth);
        this.setState({currentPage: currentPage});
        console.log("handleScroll: " + currentPage);
    }

    handleScrollBegin = ()=> {
        console.log("handleScrollBegin");
        clearInterval(this.timer);
    }

    handleScrollEnd = ()=> {
        console.log("handleScrollEnd");
        this.startTimer();
    }

    startTimer = ()=> {
        this.timer = setInterval(()=> {
            var currentpage = ++this.state.currentPage == JsonData.data.length ? 0 : this.state.currentPage;
            this.setState({currentPage: currentpage});
            console.log("timer: " + currentpage);
            var offsetX = currentpage * ScreenWidth;
            this.refs.ScrollView.scrollTo({x: offsetX, y: 0, animated: true});
        }, 2000);
    }

    render() {
        return <View>
            <View style={styles.container}>
                <ScrollView
                    ref='ScrollView'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollBegin={this.handleScroll}
                    onScrollBeginDrag={this.handleScrollBegin}
                    onScrollEndDrag={this.handleScrollEnd}>
                    {this.renderChild()}
                </ScrollView>
                <View style={styles.circleWrapperStyle}>
                    {this.renderCircles()}
                </View>
            </View>
            <View>
                <MyScrollView/>
            </View>
        </View>
    }

    componentDidMount = ()=> {
        this.startTimer();
    }
    componentWillUnmount = ()=> {
        clearInterval(this.timer);
    }
}

let styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    imageStyle: {
        backgroundColor: 'red',
        width: ScreenWidth,
        height: 180
    },
    titleStyle: {
        flexDirection: 'row',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        color: 'white',
        padding: 3,
        paddingRight: 10,
        paddingLeft: 5
    },
    circleWrapperStyle: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 10
    },
    circleStyle: {
        fontSize: 25,
        color: '#FFF'
    }
})

module.exports = BannerView;