import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

export const BACKGROUND_IMAGE: StyleProp<ImageStyle> = { height: '100%', width: '100%', position: 'absolute' };
export const PROFILE_PICTURE_CONTAINER: StyleProp<ViewStyle> = { width: '100%', height: 150, display: 'flex', alignItems: 'center', marginTop: '10%' };
export const PROFILE_PICTURE: StyleProp<ImageStyle> = { height: 100, width: 100, borderRadius: 100 };
export const USERNAME: StyleProp<TextStyle> = {
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 'bold',
};
