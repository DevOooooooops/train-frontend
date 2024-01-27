import { CQText } from 'app/components/Text/CQText';
import { AppStackScreenProps, navigate } from "app/navigators"
import { ErrorBoundary } from 'app/screens';
import { palette } from 'app/theme/palette';
import React, { FC, useEffect } from "react"
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
  FLAG_ICON,
  HEADER_CONTAINER,
  HEADER_IMAGE_PROFILE,
  HEADER_NAME,
  HEADER_PROFILE_BUTTON,
  HEADER_SUB_NAME,
  HEADER_TEXT_STACK,
  ICON_BUTTON,
  ICON_BUTTON_CONTAINER,
  LEVEL_CONTAINER,
  LEVEL_VALUE,
} from './styles';
import { useStores } from 'app/models';
import { frequencyToLabel } from 'app/utils/frequency-to-label';
import { CQImage } from "app/components/AutoImage/CQImage"

interface HomeScreenProps extends AppStackScreenProps<'Home'> {}

export const HomeScreen: FC<HomeScreenProps> = _props => {
  const gotToProfile = () => navigate('Profile');
  const { authStore } = useStores();
  const {currentUser, currentAccount} = authStore
  useEffect(() => {
    (async () => {
      await authStore.getUser()
    })();
  }, [])

  return (
    <ErrorBoundary catchErrors='always'>
      <View>
        <View style={HEADER_CONTAINER}>
          <View style={HEADER_IMAGE_PROFILE}>
            <CQImage
              source={require('assets/images/cash-quest-logo.png')}
              resizeMode='stretch'
              resizeMethod='auto'
              style={{ height: '100%', width: '100%', position: 'absolute' }}
            />
          </View>
          <View style={HEADER_TEXT_STACK}>
            <CQText style={HEADER_SUB_NAME} text={'To be the best...'}></CQText>
            <CQText style={HEADER_NAME} text={currentUser?.username || ''}></CQText>
          </View>
          <TouchableOpacity onPress={gotToProfile} style={HEADER_PROFILE_BUTTON}>
            <IonIcon name='chevron-forward-sharp' size={20} />
          </TouchableOpacity>
        </View>
        <View style={BALANCE_CARD}>
          <View style={BALANCE_CONTAINER}>
            <View style={BALANCE_CARD_TITLE_CONTAINER}>
              <IonIcon name='wallet' size={20} color='#fff' />
              <CQText style={BALANCE_TEXT} text={'Your current balance'}></CQText>
            </View>
            <View style={BALANCE_CARD_VALUE_CONTAINER}>
              <CQText style={BALANCE_VALUE} text={`$ ${currentAccount?.balance ?? '00.00'}`}></CQText>
            </View>
          </View>
          <View style={ICON_BUTTON_CONTAINER}>
            <View>
              <TouchableOpacity style={ICON_BUTTON} onPress={() => navigate('TransactionCreation', {type: 'INCOME'})}>
                <IonIcon name='arrow-up' size={20} color={palette.deepPink} />
              </TouchableOpacity>
              <CQText style={BALANCE_TEXT} text={'Deposit'}></CQText>
            </View>
            <View>
              <TouchableOpacity style={ICON_BUTTON} onPress={() => navigate('TransactionCreation', {type: 'OUTCOME'})}>
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
              <CQText style={BUDGET_MODE_VALUE} text={`${currentAccount?.income?.savingTarget || '0'}%`}></CQText>
              <CQText style={BALANCE_TEXT} text={frequencyToLabel(currentAccount?.income?.earningFrequency)}></CQText>
            </View>
          </View>
          <View style={ADDITIONAL_INFO_BOX}>
            <CQText style={BALANCE_TEXT} text={'Goal'}></CQText>
            <CQText style={BUDGET_MODE_VALUE} text={`$ ${currentAccount?.income?.savingTarget || '00.00'}`}></CQText>
          </View>
        </View>
        <View style={LEVEL_CONTAINER}>
          <CQText style={BALANCE_TEXT} text='Your current level'></CQText>
          <CQText style={LEVEL_VALUE} text={`${currentAccount?.level || '1'}`}></CQText>
          <View style={FLAG_ICON}>
            <IonIcon size={70} name='flag' color={palette.white} />
          </View>
        </View>
      </View>
    </ErrorBoundary>
  );
};
