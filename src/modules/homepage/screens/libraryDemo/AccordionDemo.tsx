import React from 'react';
import { Container } from '@/components/Container';
import { Accordion, Box, Text } from '@td-design/react-native';

export default function AccordionDemo() {
  return (
    <Container>
      <Accordion
        multiple={false}
        sections={[
          { title: '我是标题', content: '11111111111111111' },
          {
            title: '我是标题',
            content: '222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222',
          },
          {
            title: '我是标题',
            content: '我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是',
          },
        ]}
      />
      <Box><Text>123</Text></Box>
    </Container>
  );
}
