import { palette } from 'app/theme/palette';
import { StyleProp, ViewStyle } from 'react-native';

export const LIST_ICON_RIGHT_CONTAINER: StyleProp<ViewStyle> = {
  height: 40,
  width: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
};

export const LIST_ICON_LEFT_CONTAINER: StyleProp<ViewStyle> = {
  ...LIST_ICON_RIGHT_CONTAINER,
  backgroundColor: palette.deepPink,
};

export const LIST_CONTAINER: StyleProp<ViewStyle> = {
  width: '92%',
  marginLeft: '4%',
  marginRight: '4%',
  marginTop: 6,
  padding: 4,
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
};

export const LIST: StyleProp<ViewStyle> = {
  marginLeft: 10,
};
