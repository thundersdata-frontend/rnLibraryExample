import React, { FC } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { mix } from 'react-native-redash';

import { SvgIcon, Tree, Theme, useTheme } from '@td-design/react-native';

import { Container } from '@/components/Container';

const CustomExpandIcon: FC<{ progress: Animated.SharedValue<number> }> = ({ progress }) => {
  const theme = useTheme<Theme>();
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${mix(progress.value, 0, Math.PI / 2)}rad` }],
  }));

  return (
    <Animated.View style={style}>
      <SvgIcon name="bells" color={theme.colors.gray500} />
    </Animated.View>
  );
};

export default () => {
const treeData = [
  {
    text: 'parent 1',
    id: '0-0',
    items: [
      {
        text: 'parent 1-0',
        id: '0-0-0',
        items: [
          {
            text: 'leaf1',
            id: '0-0-0-0',
            disabled: true,
          },
          {
            text: 'leaf2',
            id: '0-0-0-1',
          },
        ],
      },
      {
        text: 'parent 1-1',
        id: '0-0-1',
        disabled: true,
        items: [{ text: 'sss', id: '0-0-1-0' }],
      },
    ],
  },
];

  return (
    <Container>
      <Tree
        data={treeData}
        expandAll
        // customExpandIcon={progress => <CustomExpandIcon {...{ progress }} />}
      />
    </Container>
  );
};
