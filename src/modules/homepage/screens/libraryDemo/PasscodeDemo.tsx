import { Button, Passcode, WhiteSpace, WingBlank } from '@td-design/react-native';
import { PasscodeRef } from '@td-design/react-native/lib/typescript/passcode';
import { useSafeState } from '@td-design/rn-hooks';
import { Container } from '@/components/Container';
import React, { useRef } from 'react';

export default function PasscodeDemo() {
  const otpRef = useRef<PasscodeRef>(null);
  const [s, setS] = useSafeState(true);

  const focusOTP = () => {
    otpRef.current?.focus();
  };

  const resetOTP = () => {
    otpRef.current?.reset();
  };


  const handleChange = (code: string) => {
    console.log('currentCodeReturned', code, s);
    setS(s => !s);
  };

  return (
    <Container>
      <WingBlank>
        <Button onPress={resetOTP} title="Reset" />
        <WhiteSpace />
        <Button onPress={focusOTP} title="Focus" />
        <WhiteSpace />
        {/* <Passcode
            clearTextOnFocus
            onChange={handleChange}
            keyboardType="phone-pad"
            count={4}
            ref={otpRef}
            selectTextOnFocus={false}
          /> */}
        <Passcode
          secureTextEntry={true}
          ref={otpRef}
          style={{ margin: 20 }}
          inputContainerStyle={{ borderWidth: 1, borderColor: 'green' }}
          focusStyle={{ borderWidth: 1, borderColor: 'red' }}
          onFinish={() => {
            const value = otpRef.current?.getValue();
            console.log(value, '333');
          }}
        />
      </WingBlank>
    </Container>
  );
}
