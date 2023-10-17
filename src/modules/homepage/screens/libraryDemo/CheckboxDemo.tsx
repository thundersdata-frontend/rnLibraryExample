import { Checkbox, Flex, Text } from '@td-design/react-native';
import React, { ReactText } from 'react';
import { useState } from 'react';

import { Container } from '@/components/Container';

const { CheckboxList } = Checkbox;
export default function CheckboxDemo() {
  const [value, setValue] = useState<ReactText[] | undefined>();

  const handleChange = (value: ReactText[]) => {
    setValue(value);
  };
  return (
    <Container>
      <Checkbox
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ]}
        showCheckAll={false}
        // disabledValue={['Apple']}
        // defaultValue={['Pear']}
        value={value}
        onChange={handleChange}
      />
      <Flex>
        {value?.map(val => (
          <Text key={val}>{val}/</Text>
        ))}
      </Flex>

      <CheckboxList
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' },
        ]}
        // disabledValue={['Apple']}
        defaultValue={['Pear']}
      />
    </Container>
  );
}
