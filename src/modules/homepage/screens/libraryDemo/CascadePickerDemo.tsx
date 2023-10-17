import { Box, Button, Text } from '@td-design/react-native';
import { Picker } from '@td-design/react-native-picker';
import { Container } from '@/components/Container';
import React, { useState } from 'react';


const data = [
  {
    label: '江苏省',
    value: '1',
    children: [
      {
        label: '南京市',
        value: '11',
        children: [
          {
            label: '雨花台区',
            value: '111',
          },
          {
            label: '秦淮区',
            value: '112',
          },
        ],
      },
      {
        label: '苏州市',
        value: '12',
        children: [
          {
            label: '姑苏区',
            value: '121',
          },
          {
            label: '虎丘区',
            value: '122',
          },
        ],
      },
    ],
  },
  {
    label: '浙江省',
    value: '2',
    children: [
      {
        label: '杭州市',
        value: '21',
        children: [
          {
            label: '西湖区',
            value: '211',
          },
          {
            label: '余杭区',
            value: '212',
          },
        ],
      },
      {
        label: '宁波市',
        value: '22',
        children: [
          {
            label: '鄞州区',
            value: '221',
          },
          {
            label: '镇海区',
            value: '222',
          },
        ],
      },
    ],
  },
];
export default function CascadePickerDemo() {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<ItemValue[] | undefined>(undefined);

  const handleChange = (val?: ItemValue[]) => {
    console.log(val);
    setValue(val);
  };

  return (
    <Container>
      <Box>
        <Text>当前值：{value?.[0]}</Text>
        <Button title="显示picker" onPress={() => setVisible(true)} />
        <Picker
          cascade
          visible={visible}
          value={value}
          onChange={handleChange}
          onClose={() => setVisible(false)}
          data={data}
        />
      </Box>
    </Container>
  );
}