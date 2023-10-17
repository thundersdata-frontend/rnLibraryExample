import React from 'react';
import { ScrollView } from 'react-native';
import { Container } from '@/components/Container';
import ImagePicker from '@td-design/react-native-image-picker';
import { ImgCard } from '@/components/ImgCard';

export default () => {
  const uploadFile: (file: File) => Promise<string> = (file: File) => {
    console.log(file);
    return new Promise(resolve => {
      resolve('https://alifei04.cfp.cn/creative/vcg/veer/800water/veer-303764513.jpg');
    });
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <ImagePicker
          onUpload={uploadFile}
          onGrantFail={() => {
            console.log('暂未授权');
          }}
          showUploadImg
        >
          <ImgCard title="身份证" />
        </ImagePicker>
      </ScrollView>
    </Container>
  );
};
