import { palette } from 'app/theme/palette';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

const FULL_WIDTH_WITH_MARGIN: StyleProp<ViewStyle> = {
  marginLeft: '4%',
  marginRight: '4%',
  width: '92%',
};

export const HEADER_CONTAINER: StyleProp<ViewStyle> = {
  height: 80,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: 10,
  margin: 10,
  marginTop: 20,
};

export const HEADER_TEXT_STACK: StyleProp<ViewStyle> = {
  display: 'flex',
  flexGrow: 2,
  flexDirection: 'column',
};

export const HEADER_IMAGE_PROFILE: StyleProp<ViewStyle> = {
  height: 60,
  width: 60,
  backgroundColor: palette.greyDarker,
  borderRadius: 30,
  marginLeft: 10,
  marginRight: 20,
};

export const BALANCE_CARD: StyleProp<ViewStyle> = {
  width: '92%',
  height: 230,
  backgroundColor: palette.deepPink,
  margin: '4%',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  position: 'relative',
};

export const BALANCE_CONTAINER: StyleProp<ViewStyle> = {
  margin: '5%',
};

export const BALANCE_TEXT: StyleProp<TextStyle> = {
  color: palette.white,
  fontSize: 16,
};

export const BALANCE_VALUE: StyleProp<TextStyle> = {
  color: palette.white,
  fontSize: 32,
  fontWeight: 'bold',
  marginRight: 10,
};

export const BALANCE_CARD_TITLE_CONTAINER: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const BALANCE_CARD_VALUE_CONTAINER: StyleProp<ViewStyle> = {
  ...BALANCE_CARD_TITLE_CONTAINER,
  marginTop: 10,
};

export const HEADER_SUB_NAME: StyleProp<TextStyle> = { fontSize: 16, color: palette.greyDarker };
export const HEADER_NAME: StyleProp<TextStyle> = { fontSize: 24, color: palette.black, fontWeight: 'bold' };

export const HEADER_PROFILE_BUTTON: StyleProp<ViewStyle> = {
  width: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const DECORATION: StyleProp<ViewStyle> = {
  backgroundColor: palette.white,
  opacity: 0.3,
  position: 'absolute',
};

export const DECORATION_MIN: StyleProp<ViewStyle> = {
  ...DECORATION,
  bottom: 60,
  right: 60,
  height: 40,
  width: 40,
  borderRadius: 20,
};

export const DECORATION_MID: StyleProp<ViewStyle> = {
  ...DECORATION,
  bottom: 30,
  right: 30,
  height: 70,
  width: 70,
  borderRadius: 35,
};

export const DECORATION_LARGE: StyleProp<ViewStyle> = {
  ...DECORATION,
  bottom: 0,
  right: 0,
  height: 100,
  width: 100,
  borderRadius: 50,
};

export const ICON_BUTTON: StyleProp<ViewStyle> = {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#fffffff0',
  borderColor: palette.deepPink,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ICON_BUTTON_ICON: StyleProp<TextStyle> = {
  color: palette.deepPink,
};

export const BOX_SHADOW: StyleProp<ViewStyle> = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
  position: 'relative',
  borderRadius: 10,
  padding: 10,
};

export const ICON_BUTTON_CONTAINER: StyleProp<ViewStyle> = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  width: 150,
  position: 'absolute',
  bottom: 10,
  marginLeft: 10,
};

export const ADDITIONAL_INFO_CONTAINER: StyleProp<ViewStyle> = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '92%',
  margin: '4%',
  marginTop: 0,
  flexDirection: 'row',
};

export const ADDITIONAL_INFO_BOX: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexBasis: '47%',
  height: 100,
  backgroundColor: palette.deepPink,
  ...BOX_SHADOW,
};

export const ADDITIONAL_INFO_BOX_1: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
};

export const BUDGET_MODE_VALUE: StyleProp<TextStyle> = {
  fontSize: 32,
  fontWeight: 'bold',
  color: palette.white,
  marginLeft: 2,
};

export const LEVEL_CONTAINER: StyleProp<ViewStyle> = {
  ...FULL_WIDTH_WITH_MARGIN,
  height: 100,
  padding: 10,
  position: 'relative',
  backgroundColor: palette.deepPink,
  ...BOX_SHADOW,
};

export const LEVEL_VALUE: StyleProp<ViewStyle> = {
  ...BUDGET_MODE_VALUE,
  position: 'absolute',
  bottom: 10,
  left: 10,
};

export const FLAG_ICON: StyleProp<ViewStyle> = {
  width: '100%',
  height: 100,
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
};
