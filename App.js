/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Dimensions} from 'react-native';

let {width,height} = Dimensions.get('window');

import SideMenu from 'react-native-side-menu';
import Menu from './left_menu'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const onButtonPress = () => {
  Alert.alert('点击了Button按钮');
};

type = {};
export default class App extends Component {
  
  constructor(props){
    super(props);

    this.state={
        isOpen:false,
    }

    this.SelectMenuItemCallBack = this.SelectMenuItemCallBack.bind(this);
  }

  //点击侧边栏的按钮，回调此函数，关闭menu
  SelectMenuItemCallBack(){
    this.setState({
        isOpen:!this.state.isOpen,
    })
  }

  //点击打开侧边栏
  SelectToOpenLeftSideMenu(){
    this.setState({
        isOpen:true,
    })
  }

  render() {

    //初始化menu，传递回调函数
    const menu=<Menu onSelectMenuItem={this.SelectMenuItemCallBack}/>;

    return (

      <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen)=>{
                this.setState({
                    isOpen:isOpen,
                })
            }}
            menuPosition={'left'}//侧边栏是左边还是右边
            openMenuOffset={0.7*width}//侧边栏的宽度
            edgeHitWidth={200}//手指拖动可以打开侧边栏的距离（距离侧边栏）
      >

      <View style={styles.container}>
        <View>
          <TouchableOpacity style={[styles.menu]}
            onPress={() => this.SelectToOpenLeftSideMenu() }>
            <Image style={{width:20, height:20}} source={require('./image/menu.png')}></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.title}>
          <Text style={[styles.title_word, styles.word]}>YOU.  </Text>
          <Text style={[styles.title_word, styles.blue]}>MORE FOCUS</Text>
        </View>
      </View>

      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },black: {
    backgroundColor: '#000000'
  },
  title : {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  title_word: {
    fontSize: 24
  },
  menu: {
    width: 45,
    height: 45,
    padding: 10
  },blue : {
    color: '#77C5CB'
  },word : {
    color: '#ABABAB'
  }
});