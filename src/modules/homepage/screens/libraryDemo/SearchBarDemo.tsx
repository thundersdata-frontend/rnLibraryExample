import React from 'react';
import { View } from 'react-native';

import { SearchBar, helpers, Text, WhiteSpace } from '@td-design/react-native';

import { Container } from '@/components/Container';

const { px } = helpers;

export default function SearchBarDemo() {
  return (
    <Container>
      <View style={{ flex: 1 }}>
        {/* 默认配置 */}
        <SearchBar
          style={{
            borderRadius: px(28),
          }}
          inputStyle={{ textAlign: 'center' }}
          onChange={value => console.log(value)}
          onSearch={value => console.log(value)}
        />
        <WhiteSpace />

        {/* 配置placeholder、cancelTitle */}
        {/* <SearchBar
          placeholder="请输入酒店/关键词"
          cancelTitle="cancel"
          cancelWidth={60}
        />
        <WhiteSpace /> */}

        {/* 配置placeholderPosition */}
        {/* <SearchBar placeholderPosition="center" />
        <WhiteSpace /> */}

        {/* 配置defaultValue、autoFocus */}
        {/* <SearchBar defaultValue="美团酒店" autoFocus />
        <WhiteSpace /> */}

        {/* 配置children */}
        <SearchBar defaultValue="hello" onSearch={text => console.log(text, '34344')}>
          <Text variant="p3" color="gray300">
            入住时间
          </Text>
          <Text variant="p3" color="gray300">
            离店时间
          </Text>
        </SearchBar>
        <WhiteSpace />
      </View>
    </Container>
  );
}
