/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class left_menu extends Component {
    constructor(props){
        super(props);

        this.selectSideMenu = this.selectSideMenu.bind(this);
    }

    //函数回调
    selectSideMenu(){
        this.props.onSelectMenuItem();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.photo}></View>
                <View style={styles.name}></View>
                <View></View>
                <View></View>
                <TouchableOpacity onPress={()=>{
                    this.selectSideMenu();
                }}>

                    <Text>点击关闭侧边栏</Text>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2C2C2',
        justifyContent:'center',
        alignItems:'center',
    },

});