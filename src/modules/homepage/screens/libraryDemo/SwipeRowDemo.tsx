import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Box, SwipeRow, helpers } from '@td-design/react-native';

type DataRow = {
  from: string;
  when: string;
  message: string;
};

const SwipeableRow = ({ item, index }: { item: DataRow; index: number }) => {
  return (
    <SwipeRow
      anchor={index}
      actions={[{ label: '更多', backgroundColor: 'blue', onPress: () => console.log('more') }]}
      actionWidth={60}
      contentContainerStyle={{
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#f0f0f0'
      }}
    >
      <Box>
        <Text>{item.from}</Text>
        <Text>
          {item.message}
        </Text>
        <Text>{item.when} ❭</Text>
      </Box>
    </SwipeRow>
  );
};

export default class Example extends Component {
  render() {
    return (
      <SwipeRow.Provider multiple>
        <FlatList
          data={DATA}
          renderItem={({ item, index }) => <SwipeableRow key={index} item={item} index={index} />}
          keyExtractor={(_item, index) => `message ${index}`}
        />
      </SwipeRow.Provider>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
});

const DATA: DataRow[] = [
  {
    from: 'D\'Artagnan',
    when: '3:11 PM',
    message:
      'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
  },
  {
    from: 'Aramis',
    when: '11:46 AM',
    message:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
  },
  {
    from: 'Athos',
    when: '6:06 AM',
    message:
      'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
  },
  {
    from: 'Porthos',
    when: 'Yesterday',
    message:
      'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
  },
  {
    from: 'Domestos',
    when: '2 days ago',
    message:
      'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 days ago',
    message:
      'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
  },
  {
    from: 'D\'Artagnan',
    when: 'Week ago',
    message:
      'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
  },
  {
    from: 'Cardinal Richelieu',
    when: '2 weeks ago',
    message:
      'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
  },
];
