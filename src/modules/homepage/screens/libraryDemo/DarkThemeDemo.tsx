import React from 'react';
import { Box, Text } from '@td-design/react-native';
import { Switch } from 'react-native';
import { Container } from '@/components/Container';

export default function DarkThemeDemo() {
  return (
    <Container>
      <Switch />
      <Box backgroundColor="background">
        <Text variant="p1">哈哈哈哈，我是内容</Text>
      </Box>
    </Container>
  );
}
