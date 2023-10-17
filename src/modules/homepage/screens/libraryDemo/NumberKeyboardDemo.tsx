import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { Button, NumberKeyboard, Text, WhiteSpace } from '@td-design/react-native';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';

import { Container } from '@/components/Container';

const { NumberKeyboardView, NumberKeyboardModal, NumberKeyboardInput, NumberKeyboardItem } = NumberKeyboard;

export default () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);

  const handleFinish = (values: Store) => {
    console.log(values);
  };

  return (
    <Container>
      <ScrollView>
        <WhiteSpace />
        <Text>数组键盘带小数点:</Text>
        <WhiteSpace />
        <NumberKeyboardView
          onPress={e => {
            // Alert.alert(e);
          }}
          onDelete={() => {
            // Alert.alert('delete');
          }}
          onSubmit={() => {
            // Alert.alert('submit');
          }}
        />
        <WhiteSpace />
        <Text>身份证键盘:</Text>
        <WhiteSpace />
        <NumberKeyboardView
          type="idcard"
          onPress={e => {
            Alert.alert(e);
          }}
          onDelete={() => {
            Alert.alert('delete');
          }}
          onSubmit={() => {
            Alert.alert('submit');
          }}
        />
        <WhiteSpace />
        <Text>数字键盘不带小数:</Text>
        <WhiteSpace />
        <NumberKeyboardView
          type="integer"
          onPress={e => {
            Alert.alert(e);
          }}
          onDelete={() => {
            Alert.alert('delete');
          }}
          onSubmit={() => {
            Alert.alert('submit');
          }}
        />
        <WhiteSpace />
        <Button title="显示弹窗" onPress={() => setVisible(true)} />
        <NumberKeyboardModal
          visible={visible}
          onClose={() => setVisible(false)}
          type="idcard"
          onSubmit={(value: string) => {
            Alert.alert(value);
          }}
        />

        <Form component={false} form={form} initialValues={{ quantity: '6543' }} onFinish={handleFinish}>
          <Field name="quantity">
            <NumberKeyboardInput label="身份证号" type="idcard" />
          </Field>
        </Form>

        <Form component={false} form={form} initialValues={{ quantity: '6543' }} onFinish={handleFinish}>
          <Field name="quantity">
            <NumberKeyboardItem type="number" digit={2} extra={<Text>元</Text>} style={{ paddingRight: 4 }} />
          </Field>
        </Form>
        <WhiteSpace size="x8" />
      </ScrollView>
    </Container>
  );
};
