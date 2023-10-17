import { Flex, Tooltip } from '@td-design/react-native';
import { Container } from '@/components/Container';
// import Tooltip from '@/components/Tooltip';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';

export default () => {
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <View style={{ flex: 1 }}>
          <Tooltip content={<Text style={{ color: '#fff' }}>Tooltip text</Text>} withOverlay={false}>
            <View>
              <Text style={{ backgroundColor: 'yellow' }}>press me </Text>
            </View>
          </Tooltip>
          <Flex>
          <View style={{ flex: 1 }} />
          <Tooltip content={<Text style={{ color: '#fff' }}>Tooltip text</Text>} overlayColor='yellow'>
            <View>
              <Text style={{ backgroundColor: 'yellow' }}>press me </Text>
            </View>
          </Tooltip>
        </Flex>
        </View>
        <Tooltip content={<Text style={{ color: '#fff' }}>Tooltip text</Text>}>
            <View>
              <Text style={{ backgroundColor: 'yellow' }}>press me </Text>
            </View>
          </Tooltip>
        <Flex>
          <View style={{ flex: 1 }} />
          <Tooltip content={<Text style={{ color: '#fff' }}>Tooltip text</Text>}>
            <View>
              <Text style={{ backgroundColor: 'yellow' }}>press me </Text>
            </View>
          </Tooltip>
        </Flex>
      </ScrollView>
    </Container>
  );
};
