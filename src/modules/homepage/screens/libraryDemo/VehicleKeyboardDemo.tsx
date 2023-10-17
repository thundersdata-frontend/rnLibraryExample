import React, { useState } from 'react';
import { Alert, ScrollView } from 'react-native';

import { Button, VehicleKeyboard, WhiteSpace } from '@td-design/react-native';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';

import { Container } from '@/components/Container';

const { VehicleKeyboardModal, VehicleKeyboardInput, VehicleKeyboardItem } = VehicleKeyboard;

export default () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);

  const handleFinish = (values: Store) => {
    console.log(values);
  };

  return (
    <Container>
      <ScrollView>
        <Button title="显示弹窗" onPress={() => setVisible(true)} />
        <VehicleKeyboardModal
          visible={visible}
          onClose={() => setVisible(false)}
          onSubmit={(value: string) => {
            Alert.alert(value);
          }}
        />

        <Form component={false} form={form} initialValues={{ quantity: '6543' }} onFinish={handleFinish}>
          <Field name="quantity">
            <VehicleKeyboardInput label="车牌号" />
          </Field>
        </Form>

        <Form component={false} form={form} initialValues={{ quantity: '6543' }} onFinish={handleFinish}>
          <Field name="quantity">
            <VehicleKeyboardItem style={{paddingRight: 4}} />
          </Field>
        </Form>
        <WhiteSpace size="x8" />
      </ScrollView>
    </Container>
  );
};
