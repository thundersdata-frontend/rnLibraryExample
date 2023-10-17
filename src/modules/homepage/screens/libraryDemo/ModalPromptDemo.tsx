import { Input, Modal, Text, WhiteSpace } from '@td-design/react-native';
import { Container } from '@/components/Container';
import React, { useState } from 'react';
import { Button } from 'react-native';


const promiseFn: () => Promise<void> = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export default function ModalPromptDemo() {
  const [value, setValue] = useState<string>();

  const [anotherValue, setAnotherValue] = useState('');

  const handleOk = (input = '') => {
    setValue(input);
    console.log(anotherValue);
  };

  const handleCancel = () => {
    setAnotherValue('123');
  };

  const handlePress = () => {
    Modal.prompt({
      title: '我是弹窗',
      content: '我是内容',
      input: <Input placeholder="请输入" />,
      onOk: handleOk,
      onCancel: handleCancel,
    });
  };
  return (
    <Container>
      <Button title="弹窗" onPress={handlePress} />
      <WhiteSpace />
      <Text>您输入的是：{value}</Text>
      <Text>另一个值是：{anotherValue}</Text>
      <Button title="修改另一个值" onPress={() => setAnotherValue(Math.random() + '')} />
    </Container>
  );
}