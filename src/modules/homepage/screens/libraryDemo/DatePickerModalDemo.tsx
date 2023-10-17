import React, { useState } from 'react';
import { Keyboard } from 'react-native';



import { KeyboardInsetsView } from '@sdcx/keyboard-insets';
import { Box, Button, helpers, Input, Modal, WhiteSpace } from '@td-design/react-native';
import { DatePickerInput } from '@td-design/react-native-picker';
import Form, { Field, useForm } from 'rc-field-form';
import { Store } from 'rc-field-form/es/interface';



import { Container } from '@/components/Container';


const { px } = helpers;

export default function DatePickerModalDemo() {
  const [form] = useForm();
  const [visible, toggleVisible] = useState(false);

  const handleFinish = (values: Store) => {
    console.log(values);
  };

  return (
    <Container>
      <Button title="显示弹窗" onPress={() => toggleVisible(true)} />

      <Modal visible={visible} onClose={() => toggleVisible(false)}>
          <Box height={px(325)} backgroundColor="white" padding="x3">
            <Form component={false} form={form} onFinish={handleFinish}>
              <Field name="value">
                <Input
                  label="发货量"
                  labelPosition="top"
                  keyboardType="number-pad"
                  onBlur={() => Keyboard.dismiss()}
                  returnKeyType="next"
                />
              </Field>
              <WhiteSpace size="x4" />
              {/* <Field name="date">
                <DatePickerInput label="日期" />
              </Field> */}
            </Form>
            <WhiteSpace size="x4" />
            <Button title="确定" onPress={form.submit} />
          </Box>
      </Modal>
    </Container>
  );
}