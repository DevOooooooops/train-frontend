import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

export const BACKGROUND_IMAGE: StyleProp<ImageStyle> = { height: '100%', width: '100%', position: 'absolute' };
export const PROFILE_PICTURE_CONTAINER: StyleProp<ViewStyle> = { width: '100%', height: 150, display: 'flex', alignItems: 'center', marginTop: 20 };
export const PROFILE_PICTURE: StyleProp<ImageStyle> = { height: 150, width: 150, borderRadius: 100 };
