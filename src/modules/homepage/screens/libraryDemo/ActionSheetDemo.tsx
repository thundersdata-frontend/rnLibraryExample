import React, { useState } from 'react';
import { Button } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import { ActionSheet, Text, Toast } from '@td-design/react-native';

import { Container } from '@/components/Container';

export default function ActionSheetDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Button title="显示" onPress={() => setVisible(true)} />
      <ActionSheet
        title={ <Text textAlign={'center'}>不再关注这个公众号，你将不再收到其下发的消息， 确认不再关注？</Text>}
        items={[
          { text: '操作1', onPress: () => launchImageLibrary({ mediaType: 'photo' }) },
          { text: '操作2', onPress: () => console.log(2) },
          {
            text: '操作3',
            onPress: () => Toast.top({ content: 'hello' }),
            render: text => (
              <Text variant="p0" color="gray500">
                {text}
              </Text>
            ),
          },
          { text: '操作4', onPress: () => console.log(4), type: 'danger' },
        ]}
        onCancel={() => setVisible(false)}
        visible={visible}
      />
    </Container>
  );
}
