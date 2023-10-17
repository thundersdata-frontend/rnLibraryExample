import React from 'react';
import { Container } from '@/components/Container';
import {Alert, ScrollView} from 'react-native';
import { NoticeBar } from '@td-design/react-native';

export default function NoticeBarDemo() {
  return (
    <Container>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <NoticeBar text="我是通知我是通知我是通知我是通知我是通知我是通知22222" animated />
        {/* <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知"
          mode="close"
        /> */}
        {/* <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知"
          mode="link"
          onPress={() => console.log('123')}
        /> */}
        {/* <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知33333"
          mode="link"
          onPress={() => console.log('123')}
          animated
        />
        <NoticeBar
          text="我是通知我是通知我是通知我是通知我是通知我是通知44444"
          mode="close"
          animated
        /> */}
      </ScrollView>
    </Container>
  );
}
