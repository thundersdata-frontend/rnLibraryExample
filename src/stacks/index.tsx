import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ConfigPass } from '@/modules/auth/screens/configPass';
import { ForgetPass } from '@/modules/auth/screens/forgetPass';
import { Register } from '@/modules/auth/screens/register';
import { SignIn } from '@/modules/auth/screens/signIn';
import { LineChartDemo } from '@/modules/charts/screens/line';
import { EchartsRoot } from '@/modules/charts/screens/main';
import { MapChartDemo } from '@/modules/charts/screens/map';
import { ContactsDemo } from '@/modules/homepage/screens/contacts';
import { FlashListDemo } from '@/modules/homepage/screens/flashlist';
import { FlashListDemo1 } from '@/modules/homepage/screens/flashlist/demo1';
import { FlashListDemo2 } from '@/modules/homepage/screens/flashlist/demo2';
import { LocalModelDemo } from '@/modules/homepage/screens/localmodel';
import { LongForm } from '@/modules/homepage/screens/longform';
import { NavigationModal } from '@/modules/homepage/screens/modal';
import { LocalImageDemo } from '@/modules/homepage/screens/pictures/demo1';
import { OnlineImageDemo } from '@/modules/homepage/screens/pictures/demo2';
import { TabListDemo } from '@/modules/homepage/screens/tablist';
import { TextDemo } from '@/modules/homepage/screens/text';
import { WaterfallListDemo } from '@/modules/homepage/screens/waterfall';
import { DetailDemo } from '@/modules/others/screens/detail';
import { NotFound } from '@/modules/others/screens/dismatch';
import { ImageCrop } from '@/modules/others/screens/imageCrop';
import { LinkingFormDemo } from '@/modules/others/screens/linking';
import { Agreement } from '@/modules/policy/screens/agreement';
import { Privacy } from '@/modules/policy/screens/privacy';
import { PrivacyConfirm } from '@/modules/policy/screens/privacyConfirm';
import { ModifyPassword } from '@/modules/user/screens/modifyPass';
import { Settings } from '@/modules/user/screens/settings';
import { TabStack } from '@/stacks/tabStack';

import AccordionDemo from '@/modules/homepage/screens/libraryDemo/AccordionDemo';
import ActionSheetDemo from '@/modules/homepage/screens/libraryDemo/ActionSheetDemo';
import AvatarDemo from '@/modules/homepage/screens/libraryDemo/AvatarDemo';
import BadgeDemo from '@/modules/homepage/screens/libraryDemo/BadgeDemo';
import BoxShadowDemo from '@/modules/homepage/screens/libraryDemo/BoxShadowDemo';
import ButtonDemo from '@/modules/homepage/screens/libraryDemo/ButtonDemo';
import ButtonGroupDemo from '@/modules/homepage/screens/libraryDemo/ButtonGroupDemo';
import CalendarDemo from '@/modules/homepage/screens/libraryDemo/CalendarDemo';
import CardDemo from '@/modules/homepage/screens/libraryDemo/CardDemo';
import CascadePickerDemo from '@/modules/homepage/screens/libraryDemo/CascadePickerDemo';
import CenterDemo from '@/modules/homepage/screens/libraryDemo/CenterDemo';
import CheckboxDemo from '@/modules/homepage/screens/libraryDemo/CheckboxDemo';
import CollapseTextDemo from '@/modules/homepage/screens/libraryDemo/CollapseTextDemo';
import CountDownDemo from '@/modules/homepage/screens/libraryDemo/CountDownDemo';
import DarkThemeDemo from '@/modules/homepage/screens/libraryDemo/DarkThemeDemo';
import DatePickerDemo from '@/modules/homepage/screens/libraryDemo/DatePickerDemo';
import DatePickerInputDemo from '@/modules/homepage/screens/libraryDemo/DatePickerInputDemo';
import DatePickerModalDemo from '@/modules/homepage/screens/libraryDemo/DatePickerModalDemo';
import DividerDemo from '@/modules/homepage/screens/libraryDemo/DividerDemo';
import EmptyDemo from '@/modules/homepage/screens/libraryDemo/EmptyDemo';
import ErrorBlockDemo from '@/modules/homepage/screens/libraryDemo/ErrorBlockDemo';
import FlexDemo from '@/modules/homepage/screens/libraryDemo/FlexDemo';
import FloatButtonDemo from '@/modules/homepage/screens/libraryDemo/FloatButtonDemo';
import FlowDemo from '@/modules/homepage/screens/libraryDemo/FlowDemo';
import FormDemo from '@/modules/homepage/screens/libraryDemo/FormDemo';
import FormPickDemo from '@/modules/homepage/screens/libraryDemo/FormPickDemo';
import HeaderDemo from '@/modules/homepage/screens/libraryDemo/HeaderDemo';
import LibraryDemo from '@/modules/homepage/screens/libraryDemo';
import ImageDemo from '@/modules/homepage/screens/libraryDemo/ImageDemo';
import ImagePickerDemo from '@/modules/homepage/screens/libraryDemo/ImagePickerDemo';
import ImagePickerFormDemo from '@/modules/homepage/screens/libraryDemo/ImagePickerFormDemo';
import IndicatorDemo from '@/modules/homepage/screens/libraryDemo/IndicatorDemo';
import InputDemo from '@/modules/homepage/screens/libraryDemo/InputDemo';
import LinkDemo from '@/modules/homepage/screens/libraryDemo/LinkDemo';
import ListDemo from '@/modules/homepage/screens/libraryDemo/ListDemo';
import ListItemDemo from '@/modules/homepage/screens/libraryDemo/ListItemDemo';
import MenuDemo from '@/modules/homepage/screens/libraryDemo/MenuDemo';
import ModalAlertDemo from '@/modules/homepage/screens/libraryDemo/ModalAlertDemo';
import ModalConfirmDemo from '@/modules/homepage/screens/libraryDemo/ModalConfirmDemo';
import ModalDemo from '@/modules/homepage/screens/libraryDemo/ModalDemo';
import ModalPromptDemo from '@/modules/homepage/screens/libraryDemo/ModalPromptDemo';
import ModalTipDemo from '@/modules/homepage/screens/libraryDemo/ModalTipDemo';
import NormalPickerDemo from '@/modules/homepage/screens/libraryDemo/NormalPickerDemo';
import NoticeBarDemo from '@/modules/homepage/screens/libraryDemo/NoticeBarDemo';
import NotifyDemo from '@/modules/homepage/screens/libraryDemo/NotifyDemo';
import NumberKeyboardDemo from '@/modules/homepage/screens/libraryDemo/NumberKeyboardDemo';
import VehicleKeyboardDemo from '@/modules/homepage/screens/libraryDemo/VehicleKeyboardDemo';
import PaginationDemo from '@/modules/homepage/screens/libraryDemo/PaginationDemo';
import PasscodeDemo from '@/modules/homepage/screens/libraryDemo/PasscodeDemo';
import PasswordDemo from '@/modules/homepage/screens/libraryDemo/PasswordDemo';
import PickerItemDemo from '@/modules/homepage/screens/libraryDemo/PickerItemDemo';
import PressableDemo from '@/modules/homepage/screens/libraryDemo/PressableDemo';
import ProgressDemo from '@/modules/homepage/screens/libraryDemo/ProgressDemo';
import RadioDemo from '@/modules/homepage/screens/libraryDemo/RadioDemo';
import RatingDemo from '@/modules/homepage/screens/libraryDemo/RatingDemo';
import ResultDemo from '@/modules/homepage/screens/libraryDemo/ResultDemo';
import ScrollNumberDemo from '@/modules/homepage/screens/libraryDemo/ScrollNumberDemo';
import SearchBarDemo from '@/modules/homepage/screens/libraryDemo/SearchBarDemo';
import ShareDemo from '@/modules/homepage/screens/libraryDemo/ShareDemo';
import SliderDemo from '@/modules/homepage/screens/libraryDemo/SliderDemo';
import StepperDemo from '@/modules/homepage/screens/libraryDemo/StepperDemo';
import SvgIconDemo from '@/modules/homepage/screens/libraryDemo/SvgIconDemo';
import SwiperDemo from '@/modules/homepage/screens/libraryDemo/SwiperDemo';
import SwipeRowDemo from '@/modules/homepage/screens/libraryDemo/SwipeRowDemo';
import SwitchDemo from '@/modules/homepage/screens/libraryDemo/SwitchDemo';
import TableDemo from '@/modules/homepage/screens/libraryDemo/TableDemo';
import TabsDemo from '@/modules/homepage/screens/libraryDemo/TabsDemo';
import TagDemo from '@/modules/homepage/screens/libraryDemo/TagDemo';
import RNTextDemo from '@/modules/homepage/screens/libraryDemo/TextDemo';
import TimeLineDemo from '@/modules/homepage/screens/libraryDemo/TimeLineDemo';
import ToastDemo from '@/modules/homepage/screens/libraryDemo/ToastDemo';
import TooltipDemo from '@/modules/homepage/screens/libraryDemo/TooltipDemo';
import TreeDemo from '@/modules/homepage/screens/libraryDemo/TreeDemo';
import WhiteSpaceDemo from '@/modules/homepage/screens/libraryDemo/WhiteSpaceDemo';
import WingBlankDemo from '@/modules/homepage/screens/libraryDemo/WingBlankDemo';
import SkeletonDemo from '@/modules/homepage/screens/libraryDemo/SkeletonDemo';

const AUTH_SCREENS = [
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'ConfigPass',
    component: ConfigPass,
  },
  {
    name: 'ForgetPass',
    component: ForgetPass,
  },
  {
    name: 'Register',
    component: Register,
  },
];

const MAIN_SCREENS = [
  {
    name: 'Tab',
    component: TabStack,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'EchartsDemo',
    component: EchartsRoot,
    options: {
      title: '图表展示',
    },
  },
  {
    name: 'LineChartDemo',
    component: LineChartDemo,
    options: {
      title: '折线图',
    },
  },
  {
    name: 'TabListDemo',
    component: TabListDemo,
    options: {
      title: 'Tab长列表示例',
    },
  },
  {
    name: 'MapChartDemo',
    component: MapChartDemo,
    options: {
      title: '山东地图',
    },
  },
  {
    name: 'LocalModelDemo',
    component: LocalModelDemo,
    options: {
      title: '局部共享数据示例',
    },
  },
  {
    name: 'LongFormDemo',
    component: LongForm,
    options: {
      title: '长表单示例',
    },
  },
  {
    name: 'FlashListDemo',
    component: FlashListDemo,
    options: {
      title: 'FlashListDemo示例',
    },
  },
  {
    name: 'FlashListDemo1',
    component: FlashListDemo1,
    options: {
      title: 'FlashListDemo1示例',
    },
  },
  {
    name: 'FlashListDemo2',
    component: FlashListDemo2,
    options: {
      title: 'FlashListDemo2示例',
    },
  },
  {
    name: 'WaterfallListDemo',
    component: WaterfallListDemo,
    options: {
      title: 'WaterfallListDemo示例',
    },
  },
  {
    name: 'ContactsDemo',
    component: ContactsDemo,
    options: {
      title: 'ContactsDemo示例',
    },
  },
  {
    name: 'LocalImageDemo',
    component: LocalImageDemo,
    options: {
      title: '本地图片示例',
    },
  },
  {
    name: 'OnlineImageDemo',
    component: OnlineImageDemo,
    options: {
      title: '网络图片示例',
    },
  },
  {
    name: 'Settings',
    component: Settings,
    options: {
      title: '系统设置',
    },
  },
  {
    name: 'ModifyPassword',
    component: ModifyPassword,
    options: {
      title: '修改密码',
    },
  },
  {
    name: 'ImageCrop',
    component: ImageCrop,
    options: {
      title: '图片裁切',
    },
  },
  {
    name: 'TextDemo',
    component: TextDemo,
    options: {
      title: '文字Variant示例',
    },
  },
  {
    name: 'LinkingFormDemo',
    component: LinkingFormDemo,
    options: {
      title: 'Deeplinking回填表单示例',
    },
  },
  {
    name: 'NotFound',
    component: NotFound,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'DetailDemo',
    component: DetailDemo,
    options: {
      title: 'RESTFUL传参示例',
    },
  },
];

const MODAL_SCREENS = [
  {
    name: 'Agreement',
    component: Agreement,
    options: {
      title: '用户协议',
    },
  },
  {
    name: 'Privacy',
    component: Privacy,
    options: {
      title: '隐私政策',
    },
  },
  {
    name: 'NavigationModal',
    component: NavigationModal,
    options: {
      headerShown: false,
    },
  },
];

const Stack = createNativeStackNavigator();

export default function AppStack({ confirmed, signedIn }: { confirmed: boolean; signedIn: boolean }) {
  return (
    <Stack.Navigator
      initialRouteName={confirmed ? (signedIn ? 'Tab' : 'SignIn') : 'PrivacyConfirm'}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTitleAlign: 'center',
        animation: 'slide_from_right',
        animationDuration: 200,
        headerBackTitleVisible: false,
      }}
    >
      {!confirmed && <Stack.Screen name="PrivacyConfirm" component={PrivacyConfirm} options={{ headerShown: false }} />}
      {signedIn ? (
        <Stack.Group
          screenOptions={{
            presentation: 'card',
          }}
        >
          {MAIN_SCREENS.map(screen => (
            <Stack.Screen key={screen.name} {...screen} />
          ))}
          <Stack.Screen
            name="LibraryDemo"
            component={LibraryDemo}
            options={{ headerTitle: 'LibraryDemo' }}
          />
          <Stack.Screen
            name="NormalPickerDemo"
            component={NormalPickerDemo}
            options={{ headerTitle: 'NormalPickerDemo' }}
          />
          <Stack.Screen name="PickerItemDemo" component={PickerItemDemo} options={{ headerTitle: 'PickerItemDemo' }} />
          <Stack.Screen
            name="DatePickerModalDemo"
            component={DatePickerModalDemo}
            options={{ headerTitle: 'DatePickerModalDemo' }}
          />
          <Stack.Screen name="DatePickerDemo" component={DatePickerDemo} options={{ headerTitle: 'DatePickerDemo' }} />
          <Stack.Screen
            name="DatePickerInputDemo"
            component={DatePickerInputDemo}
            options={{ headerTitle: 'DatePickerInputDemo' }}
          />
          <Stack.Screen name="FormPickDemo" component={FormPickDemo} options={{ headerTitle: 'FormPickDemo' }} />
          <Stack.Screen name="ShareDemo" component={ShareDemo} options={{ headerTitle: 'ShareDemo' }} />
          <Stack.Screen name="ImagePickerDemo" component={ImagePickerDemo} options={{ headerTitle: 'ImagePickerDemo' }} />
          <Stack.Screen
            name="ImagePickerFormDemo"
            component={ImagePickerFormDemo}
            options={{ headerTitle: 'ImagePickerFormDemo' }}
          />
          <Stack.Screen name="SvgIconDemo" component={SvgIconDemo} options={{ headerTitle: 'SvgIconDemo' }} />
          <Stack.Screen name="FormDemo" component={FormDemo} options={{ headerTitle: 'FormDemo' }} />
          <Stack.Screen name="AccordionDemo" component={AccordionDemo} options={{ headerTitle: 'AccordionDemo' }} />
          <Stack.Screen name="CalendarDemo" component={CalendarDemo} options={{ headerTitle: 'CalendarDemo' }} />
          <Stack.Screen name="PasswordDemo" component={PasswordDemo} options={{ headerTitle: 'PasswordDemo' }} />
          <Stack.Screen name="RatingDemo" component={RatingDemo} options={{ headerTitle: 'RatingDemo' }} />
          <Stack.Screen name="TabsDemo" component={TabsDemo} options={{ headerTitle: 'TabsDemo' }} />
          <Stack.Screen name="MenuDemo" component={MenuDemo} options={{ headerTitle: 'MenuDemo' }} />
          <Stack.Screen name="FloatButtonDemo" component={FloatButtonDemo} options={{ headerTitle: 'FloatButtonDemo' }} />
          <Stack.Screen
            name="CollapseTextDemo"
            component={CollapseTextDemo}
            options={{ headerTitle: 'CollapseTextDemo' }}
          />
          <Stack.Screen name="HeaderDemo" component={HeaderDemo} options={{ header: () => null }} />
          <Stack.Screen name="NoticeBarDemo" component={NoticeBarDemo} options={{ headerTitle: 'NoticeBarDemo' }} />
          <Stack.Screen name="ProgressDemo" component={ProgressDemo} options={{ headerTitle: 'ProgressDemo' }} />
          <Stack.Screen name="SliderDemo" component={SliderDemo} options={{ headerTitle: 'SliderDemo' }} />
          <Stack.Screen name="SwipeRowDemo" component={SwipeRowDemo} options={{ headerTitle: 'SwipeRowDemo' }} />
          <Stack.Screen name="SwitchDemo" component={SwitchDemo} options={{ headerTitle: 'SwitchDemo' }} />
          <Stack.Screen name="ToastDemo" component={ToastDemo} options={{ headerTitle: 'ToastDemo' }} />
          <Stack.Screen name="NotifyDemo" component={NotifyDemo} options={{ headerTitle: 'NotifyDemo' }} />
          <Stack.Screen name="ModalAlertDemo" component={ModalAlertDemo} options={{ headerTitle: 'ModalAlertDemo' }} />
          <Stack.Screen name="ModalPromptDemo" component={ModalPromptDemo} options={{ headerTitle: 'ModalPromptDemo' }} />
          <Stack.Screen
            name="ModalConfirmDemo"
            component={ModalConfirmDemo}
            options={{ headerTitle: 'ModalConfirmDemo' }}
          />
          <Stack.Screen name="ModalTipDemo" component={ModalTipDemo} options={{ headerTitle: 'ModalTipDemo' }} />
          <Stack.Screen name="StepperDemo" component={StepperDemo} options={{ headerTitle: 'StepperDemo' }} />
          <Stack.Screen name="DarkThemeDemo" component={DarkThemeDemo} options={{ headerTitle: 'DarkThemeDemo' }} />
          <Stack.Screen name="ButtonDemo" component={ButtonDemo} options={{ headerTitle: 'ButtonDemo' }} />
          <Stack.Screen name="InputDemo" component={InputDemo} options={{ headerTitle: 'InputDemo' }} />
          <Stack.Screen name="ActionSheetDemo" component={ActionSheetDemo} options={{ headerTitle: 'ActionSheetDemo' }} />
          <Stack.Screen name="CardDemo" component={CardDemo} options={{ headerTitle: 'CardDemo' }} />
          <Stack.Screen name="BadgeDemo" component={BadgeDemo} options={{ headerTitle: 'BadgeDemo' }} />
          <Stack.Screen
            name="ModalDemo"
            component={ModalDemo}
            options={{
              headerTitle: 'ModalDemo',
            }}
          />
          <Stack.Screen name="DividerDemo" component={DividerDemo} options={{ headerTitle: 'DividerDemo' }} />
          <Stack.Screen name="TagDemo" component={TagDemo} options={{ headerTitle: 'TagDemo' }} />
          <Stack.Screen name="SearchBarDemo" component={SearchBarDemo} options={{ headerTitle: 'SearchBarDemo' }} />
          <Stack.Screen name="ImageDemo" component={ImageDemo} options={{ headerTitle: 'ImageDemo' }} />
          <Stack.Screen name="ListDemo" component={ListDemo} options={{ headerTitle: 'ListDemo' }} />
          <Stack.Screen name="ListItemDemo" component={ListItemDemo} options={{ headerTitle: 'ListItemDemo' }} />
          <Stack.Screen name="AvatarDemo" component={AvatarDemo} options={{ headerTitle: 'AvatarDemo' }} />
          <Stack.Screen name="EmptyDemo" component={EmptyDemo} options={{ headerTitle: 'EmptyDemo' }} />
          <Stack.Screen name="SwiperDemo" component={SwiperDemo} options={{ headerTitle: 'SwiperDemo' }} />
          <Stack.Screen name="TableDemo" component={TableDemo} options={{ headerTitle: 'TableDemo' }} />
          <Stack.Screen name="FlowDemo" component={FlowDemo} options={{ headerTitle: 'FlowDemo' }} />
          <Stack.Screen
            name="NumberKeyboardDemo"
            component={NumberKeyboardDemo}
            options={{ headerTitle: 'NumberKeyboardDemo' }}
          />
          <Stack.Screen
            name="VehicleKeyboardDemo"
            component={VehicleKeyboardDemo}
            options={{ headerTitle: 'VehicleKeyboardDemo' }}
          />
          <Stack.Screen name="WhiteSpaceDemo" component={WhiteSpaceDemo} options={{ headerTitle: 'WhiteSpaceDemo' }} />
          <Stack.Screen name="ButtonGroupDemo" component={ButtonGroupDemo} options={{ headerTitle: 'ButtonGroupDemo' }} />
          <Stack.Screen name="WingBlankDemo" component={WingBlankDemo} options={{ headerTitle: 'WingBlankDemo' }} />
          <Stack.Screen name="RNTextDemo" component={RNTextDemo} options={{ headerTitle: 'RNTextDemo' }} />
          <Stack.Screen name="PaginationDemo" component={PaginationDemo} options={{ headerTitle: 'PaginationDemo' }} />
          <Stack.Screen name="TimeLineDemo" component={TimeLineDemo} options={{ headerTitle: 'TimeLineDemo' }} />
          <Stack.Screen name="TreeDemo" component={TreeDemo} options={{ headerTitle: 'TreeDemo' }} />
          <Stack.Screen name="BoxShadowDemo" component={BoxShadowDemo} options={{ headerTitle: 'BoxShadowDemo' }} />
          <Stack.Screen name="CountDownDemo" component={CountDownDemo} options={{ headerTitle: 'CountDownDemo' }} />
          <Stack.Screen name="TooltipDemo" component={TooltipDemo} options={{ headerTitle: 'TooltipDemo' }} />
          <Stack.Screen name="IndicatorDemo" component={IndicatorDemo} options={{ headerTitle: 'IndicatorDemo' }} />
          <Stack.Screen name="CheckboxDemo" component={CheckboxDemo} options={{ headerTitle: 'CheckboxDemo' }} />
          <Stack.Screen name="RadioDemo" component={RadioDemo} options={{ headerTitle: 'RadioDemo' }} />
          <Stack.Screen name="FlexDemo" component={FlexDemo} options={{ headerTitle: 'FlexDemo' }} />
          <Stack.Screen name="CenterDemo" component={CenterDemo} options={{ headerTitle: 'CenterDemo' }} />
          <Stack.Screen name="PressableDemo" component={PressableDemo} options={{ headerTitle: 'PressableDemo' }} />
          <Stack.Screen name="LinkDemo" component={LinkDemo} options={{ headerTitle: 'LinkDemo' }} />
          <Stack.Screen name="PasscodeDemo" component={PasscodeDemo} options={{ headerTitle: 'PasscodeDemo' }} />
          <Stack.Screen name="ErrorBlockDemo" component={ErrorBlockDemo} options={{ headerTitle: 'ErrorBlockDemo' }} />
          <Stack.Screen name="ResultDemo" component={ResultDemo} options={{ headerTitle: 'ResultDemo' }} />
          <Stack.Screen
            name="ScrollNumberDemo"
            component={ScrollNumberDemo}
            options={{ headerTitle: 'ScrollNumberDemo' }}
          />
          <Stack.Screen
            name="CascadePickerDemo"
            component={CascadePickerDemo}
            options={{ headerTitle: 'CascadePickerDemo' }}
          />
          <Stack.Screen
            name="SkeletonDemo"
            component={SkeletonDemo}
            options={{ headerTitle: 'SkeletonDemo' }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false, presentation: 'card' }}>
          {AUTH_SCREENS.map(screen => (
            <Stack.Screen key={screen.name} {...screen} />
          ))}
        </Stack.Group>
      )}
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          animation: 'slide_from_bottom',
          animationDuration: 200,
          animationTypeForReplace: 'pop',
        }}
      >
        {MODAL_SCREENS.map(screen => (
          <Stack.Screen key={screen.name} {...screen} />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
}
