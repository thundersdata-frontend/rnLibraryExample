import { helpers, Modal } from '@td-design/react-native';
import { Container } from '@/components/Container';
import React from 'react';
import { Button } from 'react-native';
import { Image } from 'expo-image';


const { px } = helpers;

const promiseFn: () => Promise<void> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export default function ModalConfirmDemo() {
  const handlePress = () => {
    Modal.confirm({
      icon: (
        <Image source={require('@/images/logo.png')} style={{ width: px(55), height: px(54), marginTop: px(36) }} />
      ),
      title: '我是弹窗',
      content: '我是内容',
      // onOk: () => {console.log('ok')},
      // onOk: promiseFn,
      // onCancel: () => {console.log('cancel')}
      // onCancel: promiseFn,
    });
  };
  return (
    <Container>
      <Button title="弹窗" onPress={handlePress} />
    </Container>
  );
}