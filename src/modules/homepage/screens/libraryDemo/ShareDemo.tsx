import React, {useState} from 'react';
import Share from '@td-design/react-native-share';
import { Container } from '@/components/Container';
import {Button} from '@td-design/react-native';

export default function SearchBarDemo() {
  const [visible, setVisible] = useState(false);
  const handlePress = () => {
    setVisible(!visible);
  };
  return (
    <Container>
      <Button title="分享" onPress={handlePress} />
      <Share
        visible={visible}
        onCancel={() => setVisible(false)}
        onRefresh={() => console.log('123')}
        onShareSms={() => console.log('1')}
        onShareFriends={() => console.log('1')}
        onShareMoments={() => console.log('2')}
        onShareWeibo={() => console.log('3')}
        onShareAlipay={() => console.log('4')}
        onShareDingtalk={() => console.log('5')}
        onShareQQ={() => console.log('6')}
        onShareZhihu={() => console.log('7')}
        onShareQQMail={() => console.log('8')}
      />
    </Container>
  );
}
