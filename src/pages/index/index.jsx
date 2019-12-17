
import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import ABC from "./ABC";

class Index extends Component {
  render () {
    return (
      <View className='index'>
        <ABC />
      </View>
    );
  }
}

export default Index;