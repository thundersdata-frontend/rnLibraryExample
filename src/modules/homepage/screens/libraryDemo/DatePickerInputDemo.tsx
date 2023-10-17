import React from 'react';

import { ListItem, WhiteSpace, WingBlank } from '@td-design/react-native';
import { DatePeriodInput, DatePickerInput, DatePickerItem } from '@td-design/react-native-picker';

import { Container } from '@/components/Container';

export default function DatePickerInputDemo() {
  return (
    <Container>
      <WingBlank size="x4">
        <WhiteSpace />
        <DatePickerInput label="运单时间" labelPosition="top" />
        <WhiteSpace />
        <DatePickerInput label="运单时间" labelPosition="left" />

        <WhiteSpace />

        <ListItem title="承运商" arrow="horizontal" extra={<DatePickerItem />} />
        <WhiteSpace />
        <DatePeriodInput label="订单时间" />
      </WingBlank>
    </Container>
  );
}
