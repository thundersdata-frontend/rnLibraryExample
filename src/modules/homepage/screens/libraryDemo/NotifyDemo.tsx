import React from 'react';
import { Button } from 'react-native';



import { Notify } from '@td-design/react-native';



import { Container } from '@/components/Container';



export default () => {
  return (
    <Container>
      <Button title="success" onPress={() => Notify.success({ content: '购买成功' })} />
      <Button title="fail" onPress={() => Notify.fail({ content: '123' })} />
      <Button title="info" onPress={() => Notify.info({ 
        content: '提示内容333333333',
        autoClose: false,
        onPress: () => console.log('pressed'),
        onClose: () => console.log('onClose')
      })} />
    </Container>
  );
};