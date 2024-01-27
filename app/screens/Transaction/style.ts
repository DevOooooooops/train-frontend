import { palette } from 'app/theme/palette';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

type View = StyleProp<ViewStyle>;
type Text = StyleProp<TextStyle>;

export const BOX_SHADOW: View = {
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

const FLEX_CENTER: View = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const FULL_WIDTH_WITH_MARGIN: View = {
  marginLeft: '4%',
  marginRight: '4%',
  width: '92%',
};

export const CONTAINER: View = {
  height: '100%',
  width: '100%',
};

export const SCROLL_VIEW: View = {
  width: '100%',
  overflow: 'scroll',
  marginBottom: 150,
};

export const HEADER: View = {
  marginTop: 25,
  ...FULL_WIDTH_WITH_MARGIN,
  height: 100,
  ...FLEX_CENTER,
};

export const TITLE: Text = {
  fontSize: 32,
  fontWeight: 'bold',
  color: palette.white,
};

export const TRANSACTION_CARD_CONTAINER: View = {
  ...FULL_WIDTH_WITH_MARGIN,
  display: 'flex',
  flexDirection: 'row',
  height: 100,
  marginBottom: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.18,
  shadowRadius: 1.0,
  elevation: 1,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 10,
};

export const TRANSACTION_AMOUNT_CONTAINER: View = {
  height: '100%',
  width: 130,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  backgroundColor: palette.deepPink,
  borderRadius: 10,
  marginRight: 10,
};

export const TRANSACTION_AMOUNT_VALUE: Text = {
  fontSize: 24,
  fontWeight: 'bold',
  marginRight: 5,
  color: palette.black,
};

export const TRANSACTION_INFO_CONTAINER: View = {
  height: '100%',
  flexGrow: 2,
  paddingVertical: 5,
  maxWidth: '60%',
};

export const TRANSACTION_INFO_DATE: Text = {
  fontSize: 16,
  opacity: 0.5,
  color: palette.darkBlack,
};

export const TRANSACTION_INFO_REASON: Text = {
  fontSize: 16,
  marginTop: 5,
  color: palette.black,
  flexWrap: 'wrap',
};

export const TRANSACTION_AMOUNT_STATUS_CONTAINER: View = {
  height: '100%',
  width: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
