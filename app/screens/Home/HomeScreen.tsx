import { CQText } from 'app/components/Text/CQText';
import { AppStackScreenProps } from 'app/navigators';
import { ErrorBoundary } from 'app/screens';
import { palette } from 'app/theme/palette';
import React, { FC } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  ADDITIONAL_INFO_BOX,
  ADDITIONAL_INFO_BOX_1,
  ADDITIONAL_INFO_CONTAINER,
  BALANCE_CARD,
  BALANCE_CARD_TITLE_CONTAINER,
  BALANCE_CARD_VALUE_CONTAINER,
  BALANCE_CONTAINER,
  BALANCE_TEXT,
  BALANCE_VALUE,
  BUDGET_MODE_VALUE,
  DECORATION_LARGE,
  DECORATION_MID,
  DECORATION_MIN,
  HEADER_CONTAINER,
  HEADER_IMAGE_PROFILE,
  HEADER_NAME,
  HEADER_SUB_NAME,
  HEADER_TEXT_STACK,
  ICON_BUTTON,
  ICON_BUTTON_CONTAINER,
} from './styles';

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

export const HomeScreen: FC<HomeScreenProps> = function HomeScreen(_props) {
  return (
    <ErrorBoundary catchErrors='always'>
      <View>
        <View style={HEADER_CONTAINER}>
          <View style={HEADER_IMAGE_PROFILE}></View>
          <View style={HEADER_TEXT_STACK}>
            <CQText style={HEADER_SUB_NAME} text={'To be the best...'}></CQText>
            <CQText style={HEADER_NAME} text={'John Doe'}></CQText>
          </View>
        </View>
        <View style={BALANCE_CARD}>
          <View style={BALANCE_CONTAINER}>
            <View style={BALANCE_CARD_TITLE_CONTAINER}>
              <IonIcon name='wallet' size={20} color='#fff' />
              <CQText style={BALANCE_TEXT} text={'Your current balance'}></CQText>
            </View>
            <View style={BALANCE_CARD_VALUE_CONTAINER}>
              <CQText style={BALANCE_VALUE} text={'$ 250.00'}></CQText>
              <TouchableOpacity>
                <IonIcon name='eye-off-outline' size={20} color='#fff' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={ICON_BUTTON_CONTAINER}>
            <View>
              <TouchableOpacity style={ICON_BUTTON}>
                <IonIcon name='arrow-up' size={20} color={palette.deepPink} />
              </TouchableOpacity>
              <CQText style={BALANCE_TEXT} text={'Deposit'}></CQText>
            </View>
            <View>
              <TouchableOpacity style={ICON_BUTTON}>
                <IonIcon name='arrow-down' size={20} color={palette.deepPink} />
              </TouchableOpacity>
              <CQText style={BALANCE_TEXT} text={'Withdraw'}></CQText>
            </View>
          </View>
          <View style={DECORATION_MIN}></View>
          <View style={DECORATION_MID}></View>
          <View style={DECORATION_LARGE}></View>
        </View>
        <View style={ADDITIONAL_INFO_CONTAINER}>
          <View style={ADDITIONAL_INFO_BOX}>
            <CQText style={BALANCE_TEXT} text={'Budget mode'}></CQText>
            <View style={ADDITIONAL_INFO_BOX_1}>
              <CQText style={BUDGET_MODE_VALUE} text={'20%'}></CQText>
              <CQText style={BALANCE_TEXT} text={' / Per Month'}></CQText>
            </View>
          </View>
          <View style={ADDITIONAL_INFO_BOX}>
            <CQText style={BALANCE_TEXT} text={'Goal'}></CQText>
            <CQText style={BUDGET_MODE_VALUE} text={'$ 250.000'}></CQText>
          </View>
        </View>
      </View>
    </ErrorBoundary>
  );
};
