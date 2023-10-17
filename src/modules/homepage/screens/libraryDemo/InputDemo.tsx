import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Text, WhiteSpace, WingBlank } from '@td-design/react-native';

import { Container } from '@/components/Container';
import Input from '@/components/Input';

export default function InputDemo() {
  const [value, setValue] = useState<string>();

  return (
    <Container>
      <ScrollView>
        <WingBlank>
          {/* <Input placeholder="请输入姓名" />
          <WhiteSpace /> */}
          <Input colon required placeholder="请输入姓名" />
          {/* <WhiteSpace />
          <Input label="姓名" placeholder="请输入姓名" labelPosition="top" />
          <WhiteSpace />
          <Input label="姓名" placeholder="input name" labelPosition="top" inputType="password" /> */}
          {/* <WhiteSpace />
          <TextArea label="详情" placeholder="请输入详情" limit={20} />
          <WhiteSpace />
          <InputItem label="姓名" placeholder="请输入姓名" />
          <WhiteSpace />
          <InputItem
            label="姓名"
            placeholder="请输入姓名"
            extra={
              <Text style={{ color: 'green' }} variant="p0">
                test
              </Text>
            }
          />
          <WhiteSpace />
          <InputItem
            label="姓名"
            placeholder="input name"
            allowClear
            extra={'说明文字'}
          />
          <WhiteSpace />
          <InputItem label="姓名" placeholder="input name" allowClear />
          <WhiteSpace />
          <InputItem label="密码" placeholder="input password" inputType="password" />
          <WhiteSpace />
          <InputItem label="密码" placeholder="请输入密码" inputType="password" required colon /> */}
        </WingBlank>
      </ScrollView>
    </Container>
  );
}
