import { Box, Button, Text } from '@td-design/react-native';
import { Picker } from '@td-design/react-native-picker';
import { Container } from '@/components/Container';
import React, { useState } from 'react';


const data = [
  { id: 1, tenantCode: '001', typeCode: '0100', typeName: '服装' },
  { id: 2, tenantCode: '001', typeCode: '0200', typeName: '书籍' },
  { id: 3, tenantCode: '001', typeCode: '0300', typeName: '食品' },
  { id: 4, tenantCode: '001', typeCode: '0400', typeName: '文件' },
  { id: 5, tenantCode: '001', typeCode: '0500', typeName: '机械、设备、电器' },
  { id: 6, tenantCode: '001', typeCode: '0600', typeName: '行李' },
  { id: 7, tenantCode: '001', typeCode: '0700', typeName: '木材' },
  { id: 8, tenantCode: '001', typeCode: '0800', typeName: '箱包' },
  { id: 9, tenantCode: '001', typeCode: '0900', typeName: '化肥及农药' },
  { id: 10, tenantCode: '001', typeCode: '1000', typeName: '快递' },
  { id: 11, tenantCode: '001', typeCode: '1100', typeName: '粮食' },
  { id: 12, tenantCode: '001', typeCode: '1200', typeName: '钢铁' },
  { id: 13, tenantCode: '001', typeCode: '1300', typeName: '轻工原料及制品' },
  { id: 14, tenantCode: '001', typeCode: '1400', typeName: '有色金属' },
  { id: 15, tenantCode: '001', typeCode: '1500', typeName: '轻工医药产品' },
  { id: 16, tenantCode: '001', typeCode: '1601', typeName: '鲜活农产品' },
  { id: 17, tenantCode: '001', typeCode: '1602', typeName: '冷藏冷冻货物' },
  { id: 18, tenantCode: '001', typeCode: '1701', typeName: '商品汽车' },
  { id: 19, tenantCode: '001', typeCode: '1702', typeName: '矿石' },
  { id: 100, tenantCode: '001', typeCode: '1700', typeName: '其他' },
];
export default function NormalPickerDemo() {
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
          visible={visible}
          value={value}
          onChange={handleChange}
          onClose={() => setVisible(false)}
          data={data.map(item => ({ label: item.typeName, value: item.typeCode }))}
        />
      </Box>
    </Container>
  );
}