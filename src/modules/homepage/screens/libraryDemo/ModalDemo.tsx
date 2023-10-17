import React, { useState } from 'react';
import { View } from 'react-native';

import { Box, Button, Modal, Notify, Text, Toast } from '@td-design/react-native';

import { Container } from '@/components/Container';

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const content = (
    <Box height={190}>
      <Text textAlign={'center'}>123</Text>
      <Button title="显示Toast" onPress={() => Toast.bottom({ content: '123' })} />
      <Button title="显示Notify" onPress={() => Notify.success({ content: '123' })} />
    </Box>
  );

  return (
    <Container>
      <Box style={{ flex: 1 }}>
        <Button title="内容在底部" onPress={() => setVisible(true)} />
        <Button title="内容在中间" onPress={() => setVisible2(true)} />
        <Button title="内容全屏" onPress={() => setVisible3(true)} />
      </Box>
      <Modal visible={visible} onClose={() => setVisible(false)} position="bottom">
        {content}
      </Modal>
      <Modal visible={visible2} onClose={() => setVisible2(false)} position="center">
        {content}
      </Modal>
      <Modal visible={visible3} onClose={() => setVisible3(false)} position="fullscreen">
        <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>{content}</View>
        <Button title="关闭" onPress={() => setVisible3(false)} />
      </Modal>
    </Container>
  );
}
