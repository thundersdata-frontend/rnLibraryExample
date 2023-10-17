import React from 'react';
import { Text } from 'react-native';

import { SvgIcon, Timeline, WhiteSpace } from '@td-design/react-native';

import { Container } from '@/components/Container';

export default () => {
  const steps = [
    {
      title: '第一步',
      description: '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
      date: '12-12',
      time: '10:10',
    },
    {
      title: '第二步',
      description: '测试',
      date: '12-12',
      time: '10:11',
    },
    {
      title: '第三步',
      description: '测试',
      date: '12-12',
      time: '10:12',
    },
    {
      title: '第四步',
      description: '测试',
      date: '12-12',
      time: '10:13',
    },
  ];
  return (
    <Container>
      <Text>基本:</Text>
      <WhiteSpace />
      <Timeline
        data={steps}
        // direction="horizontal"
        // customIcon={<SvgIcon name="bells" size={16} />}
        // lineStyle={{ backgroundColor: 'red' }}
      />
    </Container>
  );
};
