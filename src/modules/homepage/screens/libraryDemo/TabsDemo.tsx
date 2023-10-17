import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

import { Button, Text } from '@td-design/react-native';
import Tabs from '@td-design/react-native-tabs';



const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
    <Text>First Tab</Text>
  </View>
);
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    <Button title="Button" onPress={() => console.log('clicked')} />
  </View>
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#0189fb' }}>
    <Image source={require('@/images/img-01.jpg')} style={{ width: '100%', height: 300 }} />
  </View>
);

const scenes = [
  {
    title: 'JavaScript',
    component: <FirstRoute />,
  },
  {
    title: 'Golang',
    component: <SecondRoute />,
  },
  {
    title: 'Python',
    component: <ThirdRoute />,
  },
  {
    title: 'Swift',
    component: <ThirdRoute />,
  },
  {
    title: 'Java',
    component: <ThirdRoute />,
  },
  {
    title: 'Ruby',
    component: <ThirdRoute />,
  },
  {
    title: 'Groovy',
    component: <ThirdRoute />,
  },
];

export default function TabsDemo() {
  return <Tabs
    initialPage={2}
    scenes={scenes}
    tabStyle={styles.tabStyle}
    tabItemStyle={styles.tabItemStyle}
    labelStyle={styles.labelStyle}
    indicatorStyle={styles.indicatorStyle}
  />;
}

const styles = StyleSheet.create({
  tabStyle: {
  },
  tabItemStyle: {
  },
  labelStyle: {
  },
  indicatorStyle: {
  },
});