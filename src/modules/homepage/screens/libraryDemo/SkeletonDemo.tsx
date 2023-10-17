import React from 'react';
import Skeleton from '@td-design/react-native-skeleton';
import { Container } from '@/components/Container';
import { useBoolean } from '@td-design/rn-hooks';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@td-design/react-native';


export default function SkeletonDemo() { 
  const [animationType, setAnimationType] = React.useState<'shiver' | 'pulse' | 'none'>('shiver');
  const [loading, { setTrue, setFalse }] = useBoolean(true);

  const switchAnimationType = () => {
    if (animationType === 'shiver') { 
      setAnimationType('pulse');
    } else {
      setAnimationType('shiver');
    }
  }

  return (
    <Container>
      <Skeleton animationType={animationType} loading={loading} styles={[styles.box1, styles.box2]}>
        <View style={styles.box1}>
          <Text>hello world</Text>
        </View>
        <View style={styles.box2}>
          <Text>hello world</Text>
        </View>
      </Skeleton>
      <Button title="切换" onPress={() => loading ? setFalse() : setTrue()} />
      <Button title="切换动画类型" onPress={switchAnimationType} />
    </Container>
  )
}

const styles = StyleSheet.create({
  box1: {
    width: 200,
    height: 50
  },
  box2: {
    width: 300,
    height: 120,
    marginTop: 20
  }
})