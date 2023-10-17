import React from 'react';
import { WhiteSpace, WingBlank, BoxShadow } from '@td-design/react-native';
import { Container } from '@/components/Container';
import { View, Text } from 'react-native';

export default () => {
  return (
    <Container>
      <WhiteSpace />
      <WhiteSpace />
      <WingBlank>
        <BoxShadow distance={5} startColor={'#eb9066d8'} endColor={'#ff00ff10'}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#c454f0dd',
            }}
          >
            <Text style={{ margin: 20, fontSize: 20 }}>🤯</Text>
          </View>
        </BoxShadow>
      </WingBlank>
    </Container>
  );
};
