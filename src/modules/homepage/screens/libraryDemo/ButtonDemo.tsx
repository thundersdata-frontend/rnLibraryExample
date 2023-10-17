import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { Button, Text, WhiteSpace, WingBlank } from '@td-design/react-native';

import { Container } from '@/components/Container';

export default () => {
  const [disabled, setDisabled] = useState(false);
  const [type, setType] = useState<'primary' | 'secondary'>('primary');

  return (
    <Container>
      <WingBlank>
        <Button title="按钮1" width={200} type={type} disabled={disabled} onPress={() => setType('secondary')} />
        <WhiteSpace />
        <Button title="按钮" type="secondary" onPress={() => setDisabled(disabled => !disabled)} />
        <WhiteSpace />
        <Button disabled loading title="按钮" onPress={() => Alert.alert('hello, Button')} />
        <WhiteSpace />
        <Button title="按钮" borderRadius={20} onPress={() => Alert.alert('hello, Button')} />
        <WhiteSpace />
        <Button title="圆按钮" borderRadius={20} onPress={() => Alert.alert('hello, Button')} />
        <WhiteSpace />
        <Button type="primary" loading title="线框样式" onPress={() => Alert.alert('hello, Button')} />
        <WhiteSpace />
        <Button type="secondary" disabled loading title="线框样式" onPress={() => Alert.alert('hello, Button')} />
        <WhiteSpace />
        <Button disabled type="secondary" title="线框禁用" onPress={() => console.log(10)} />
        <WhiteSpace />
        <Button title="small" size="small" onPress={() => console.log(10)} />
        <WhiteSpace />
        <Button title="large" size="large" onPress={() => console.log(10)} />
        <WhiteSpace />
        <Button title="自定义样式" style={{ height: 80, width: 120 }} onPress={() => console.log(10)} />
        <WhiteSpace />
        <TouchableOpacity activeOpacity={0.6} style={{borderWidth: 1,
          borderColor: 'red',
          backgroundColor: '#0189fb',
        paddingVertical: 8
        }}><Text>普通按钮</Text></TouchableOpacity>
        <WhiteSpace />
      </WingBlank>
    </Container>
  );
};
