import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Button } from '@td-design/react-native';

import {Container} from '@/components/Container';

export default () => {
  const navigation = useNavigation();

  const handlePress = (name: any) => {
    navigation.navigate(name);
  };

  return (
    <Container hasHeader={false}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* <Button title="AccordionDemo" onPress={() => handlePress('AccordionDemo')} />
        <Button title="ActionSheetDemo" onPress={() => handlePress('ActionSheetDemo')} />
        <Button title="AvatarDemo" onPress={() => handlePress('AvatarDemo')} />
        <Button title="BadgeDemo" onPress={() => handlePress('BadgeDemo')} />
        <Button title="BoxShadowDemo" onPress={() => handlePress('BoxShadowDemo')} />
        <Button title="ButtonDemo" onPress={() => handlePress('ButtonDemo')} />
        <Button title="ButtonGroupDemo" onPress={() => handlePress('ButtonGroupDemo')} />
        <Button title="CardDemo" onPress={() => handlePress('CardDemo')} />
        <Button title="CenterDemo" onPress={() => handlePress('CenterDemo')} />
        <Button title="CheckboxDemo" onPress={() => handlePress('CheckboxDemo')} />
        <Button title="CollapseTextDemo" onPress={() => handlePress('CollapseTextDemo')} />
        <Button title="CountDownDemo" onPress={() => handlePress('CountDownDemo')} />
        <Button title="DividerDemo" onPress={() => handlePress('DividerDemo')} />
        <Button title="EmptyDemo" onPress={() => handlePress('EmptyDemo')} />
        <Button title="ErrorBlockDemo" onPress={() => handlePress('ErrorBlockDemo')} />
        <Button title="FlexDemo" onPress={() => handlePress('FlexDemo')} />
        <Button title="FloatButtonDemo" onPress={() => handlePress('FloatButtonDemo')} />
        <Button title="FlowDemo" onPress={() => handlePress('FlowDemo')} /> */}
        <Button title="FormDemo" onPress={() => handlePress('FormDemo')} />
        <Button title="FormPickDemo" onPress={() => handlePress('FormPickDemo')} />
        <Button title="InputDemo" onPress={() => handlePress('InputDemo')} />
        {/* <Button title="HeaderDemo" onPress={() => handlePress('HeaderDemo')} />
        <Button title="ImageDemo" onPress={() => handlePress('ImageDemo')} />
        <Button title="IndicatorDemo" onPress={() => handlePress('IndicatorDemo')} />
        <Button title="LinkDemo" onPress={() => handlePress('LinkDemo')} />
        <Button title="ListItemDemo" onPress={() => handlePress('ListItemDemo')} />
        <Button title="ListDemo" onPress={() => handlePress('ListDemo')} />
        <Button title="MenuDemo" onPress={() => handlePress('MenuDemo')} /> */}
        <Button title="ModalDemo" onPress={() => handlePress('ModalDemo')} />
        <Button title="ModalAlertDemo" onPress={() => handlePress('ModalAlertDemo')} />
        <Button title="ModalConfirmDemo" onPress={() => handlePress('ModalConfirmDemo')} />
        <Button title="ModalPromptDemo" onPress={() => handlePress('ModalPromptDemo')} />
        <Button title="ModalTipDemo" onPress={() => handlePress('ModalTipDemo')} />
        <Button title="NoticeBarDemo" onPress={() => handlePress('NoticeBarDemo')} />
        <Button title="NotifyDemo" onPress={() => handlePress('NotifyDemo')} />
        <Button title="NumberKeyboardDemo" onPress={() => handlePress('NumberKeyboardDemo')} />
        <Button title="PaginationDemo" onPress={() => handlePress('PaginationDemo')} />
        <Button title="PasscodeDemo" onPress={() => handlePress('PasscodeDemo')} />
        <Button title="PressableDemo" onPress={() => handlePress('PressableDemo')} />
        <Button title="ProgressDemo" onPress={() => handlePress('ProgressDemo')} />
        <Button title="RadioDemo" onPress={() => handlePress('RadioDemo')} />
        <Button title="ResultDemo" onPress={() => handlePress('ResultDemo')} />
        <Button title="ScrollNumberDemo" onPress={() => handlePress('ScrollNumberDemo')} />
        <Button title="SearchBarDemo" onPress={() => handlePress('SearchBarDemo')} />
        <Button title="SliderDemo" onPress={() => handlePress('SliderDemo')} />
        <Button title="StepperDemo" onPress={() => handlePress('StepperDemo')} />
        <Button title="SwipeRowDemo" onPress={() => handlePress('SwipeRowDemo')} />
        <Button title="SwiperDemo" onPress={() => handlePress('SwiperDemo')} />
        <Button title="SwitchDemo" onPress={() => handlePress('SwitchDemo')} />
        <Button title="SvgIconDemo" onPress={() => handlePress('SvgIconDemo')} />
        <Button title="TableDemo" onPress={() => handlePress('TableDemo')} />
        <Button title="TagDemo" onPress={() => handlePress('TagDemo')} />
        <Button title="TimeLineDemo" onPress={() => handlePress('TimeLineDemo')} />
        <Button title="TreeDemo" onPress={() => handlePress('TreeDemo')} />
        <Button title="TooltipDemo" onPress={() => handlePress('TooltipDemo')} />
        <Button title="ToastDemo" onPress={() => handlePress('ToastDemo')} />
        <Button title="VehicleKeyboardDemo" onPress={() => handlePress('VehicleKeyboardDemo')} />
        <Button title="CalendarDemo" onPress={() => handlePress('CalendarDemo')} />
        <Button title="ImagePickerDemo" onPress={() => handlePress('ImagePickerDemo')} />
        <Button title="ImagePickerFormDemo" onPress={() => handlePress('ImagePickerFormDemo')} />
        <Button title="PasswordDemo" onPress={() => handlePress('PasswordDemo')} />
        <Button title="DatePickerDemo" onPress={() => handlePress('DatePickerDemo')} />
        <Button title="DatePickerModalDemo" onPress={() => handlePress('DatePickerModalDemo')} />
        <Button title="DatePickerInputDemo" onPress={() => handlePress('DatePickerInputDemo')} />
        <Button title="NormalPickerDemo" onPress={() => handlePress('NormalPickerDemo')} />
        <Button title="CascadePickerDemo" onPress={() => handlePress('CascadePickerDemo')} />
        <Button title="PickerItemDemo" onPress={() => handlePress('PickerItemDemo')} />
        {/* <Button title="RatingDemo" onPress={() => handlePress('RatingDemo')} />
        <Button title="ShareDemo" onPress={() => handlePress('ShareDemo')} />
        <Button title="TabsDemo" onPress={() => handlePress('TabsDemo')} />
        <Button title="SkeletonDemo" onPress={() => handlePress('SkeletonDemo')} /> */}
      </ScrollView>
    </Container>
  );
};
