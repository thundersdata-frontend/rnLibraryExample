import { Toast } from '@td-design/react-native';
import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-native';

import { Container } from '@/components/Container';

export default () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;

    const timer = setTimeout(() => {
      Toast.hide();
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <Container>
      <Button title="top" onPress={() => Toast.top({ content: '提示内容1111' })} />
      <Button title="middle" onPress={() => Toast.middle({ content: '提示内容222222' })} />
      <Button title="bottom" onPress={() => Toast.bottom({ content: '提示内容333333333' })} />
      <Button
        title="loading"
        onPress={() => {
          setLoading(true);
          Toast.process();
        }}
      />
    </Container>
  );
};
