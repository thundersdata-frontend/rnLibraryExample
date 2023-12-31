import React from 'react';
import { ScrollView } from 'react-native';

import { Box, Card, Text, WhiteSpace, WingBlank } from '@td-design/react-native';

import { Container } from '@/components/Container';

export default function CardDemo() {
  return (
    <Container>
      <ScrollView>
        <WhiteSpace />
        <WingBlank>
          <Card
            title="我是标题"
            extra="说明文字"
            footer={
              <Box>
                <Text variant="p0">底部文字</Text>
              </Box>
            }
          >
            <Text variant="p1" color="gray500">
              我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文
            </Text>
          </Card>
          <WhiteSpace />
          <Card title="我是标题" extra="说明文字">
            <Text variant="p1" color="gray500">
              我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文
            </Text>
          </Card>
          <WhiteSpace />
          <Card
            renderHeader={() => (
              <Box>
                <Text variant="p0" color="gray500">
                  自定义标题
                </Text>
              </Box>
            )}
          >
            <Text variant="p1" color="gray500">
              我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文
            </Text>
          </Card>
          <WhiteSpace />
          <Card renderHeader={() => <Text variant="h1">自定义标题</Text>} hideHeader>
            <Text variant="p1" color="gray500">
              我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文我是正文
            </Text>
          </Card>
        </WingBlank>
      </ScrollView>
    </Container>
  );
}
