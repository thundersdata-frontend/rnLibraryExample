// import { Box, Button, Flex, Progress, Text, WhiteSpace } from '@td-design/react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import { Container } from '@/components/Container';
import { Box, Button, Flex, Text, Progress, WhiteSpace } from '@td-design/react-native';

const { CircleProgress, LineProgress } = Progress;
export default function ProgressDemo() {

  const [lineProgress, setLineProgress] = useState(60);
  const [circleProgress, setCircleProgress] = useState(70);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Button title="修改直线进度条" onPress={() => setLineProgress(+(Math.random() * 100).toFixed(2))} />
        <Button title="修改环形进度条" onPress={() => setCircleProgress(+(Math.random() * 100).toFixed(2))} />

        {/* <LineProgress value={lineProgress} />
        <WhiteSpace />
        <LineProgress value={40} />
        <WhiteSpace />
        <LineProgress value={100} showLabel labelPosition="top" />
        <WhiteSpace />
        <LineProgress value={87} color={['#FFD080', 'red']} showLabel labelPosition="top" />
        <WhiteSpace />
        <LineProgress value={87} color={['#FFD080', 'red']} />
        <WhiteSpace />
        <LineProgress value={100} strokeWidth={16} />
        <WhiteSpace /> */}
        <CircleProgress value={circleProgress} showLabel={false} />
        {/* <WhiteSpace />
        <CircleProgress value={80} />
        <WhiteSpace />
        <CircleProgress value={100} />
        <WhiteSpace />
        <CircleProgress
          value={70}
          color={['rgba(250, 170, 51, 1)', 'rgba(220, 254, 10, 1)']}
          innerWidth={5}
          label={
            <Box>
              <Text variant="p3">
                wendu
              </Text>
              <Flex alignItems="flex-start">
                <Text variant="d1">
                  12
                </Text>
                <Text variant="p3">
                  。
                </Text>
              </Flex>
            </Box>
          }
        />
        <WhiteSpace />
        <CircleProgress value={70}strokeWidth={15} color={['#FFD080', 'red']} />
        <WhiteSpace />
        <CircleProgress value={70} strokeWidth={16} /> */}
      </ScrollView>
    </Container>
  );
}
