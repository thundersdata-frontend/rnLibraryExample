import React, {ReactText} from 'react';
import {Button, Radio} from '@td-design/react-native';
import { Container } from '@/components/Container';
import {useState} from 'react';

const {RadioList} = Radio;
export default function RadioDemo() {
  const [value, setValue] = useState<ReactText | undefined>();
  const [disabledValue, setDisabledValue] = useState(['Apple']);

  const handleChange = (value: ReactText) => {
    console.log(value);
    setValue(value);
  };
  return (
    <Container>
      <Button title="修改禁用选项" onPress={ () => setDisabledValue(['Apple', 'Pear'])} />
      <Button title="修改选中值" onPress={ () => setValue('Orange')} />
      <Radio
        options={[
          {label: 'Apple', value: 'Apple'},
          {label: 'Pear', value: 'Pear'},
          {label: 'Orange', value: 'Orange'},
        ]}
        disabledValue={disabledValue}
        defaultValue={'Pear'}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}
