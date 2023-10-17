import { Modal } from '@td-design/react-native';
import { Container } from '@/components/Container';
import React from 'react';
import { Button } from 'react-native';


const promiseFn: () => Promise<void> = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
};

export default function ModalAlertDemo() {
  const handlePress = () => {
    Modal.alert({
      title: '我是弹窗',
      content: '我是内容',
      onPress: async () => {
        await promiseFn();
      },
      // onPress: () => {
      //   console.log('222')
      // }
    });
  };
  return (
    <Container>
      <Button title="弹窗" onPress={handlePress} />
    </Container>
  );
}