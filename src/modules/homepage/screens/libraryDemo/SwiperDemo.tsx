import React from 'react';
import { ScrollView, Text } from 'react-native';



import { Carousel, Divider, helpers, WhiteSpace } from '@td-design/react-native';
import { Image } from 'expo-image';



import { Container } from '@/components/Container';


const { px, deviceWidth } = helpers;
export default () => {
  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text>默认配置</Text>
        <Carousel width={deviceWidth - 40} auto={false}>
          <Image source={require('@/images/img-01.jpg')} />
          <Image source={require('@/images/img-02.jpg')} />
          <Image source={require('@/images/img-03.jpeg')} />
        </Carousel>
        <WhiteSpace />
        <Divider />
        <WhiteSpace />
        <Text>宽度200，高度100</Text>
        <Carousel width={px(200)} height={px(100)}>
          <Image source={require('@/images/img-01.jpg')} />
          <Image source={require('@/images/img-02.jpg')} />
          <Image source={require('@/images/img-03.jpeg')} />
        </Carousel>
        <WhiteSpace />
        <Divider />
        <WhiteSpace />
        <Text>停留时长1000</Text>
        <Carousel width={px(200)} height={px(100)} duration={1000}>
          <Image source={require('@/images/img-01.jpg')} />
          <Image source={require('@/images/img-02.jpg')} />
          <Image source={require('@/images/img-03.jpeg')} />
        </Carousel>
        <WhiteSpace />
        <Divider />
        <WhiteSpace />
        <Text>修改指示器颜色</Text>
        <Carousel activeColor='red' inactiveColor='blue'>
          <Image source={require('@/images/img-01.jpg')} />
          <Image source={require('@/images/img-02.jpg')} />
          <Image source={require('@/images/img-03.jpeg')} />
        </Carousel>
      </ScrollView>
    </Container>
  );
};