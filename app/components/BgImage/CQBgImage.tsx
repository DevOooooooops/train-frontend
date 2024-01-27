import { FC } from 'react';
import { ImageSourcePropType, ImageStyle, ImageURISource, StyleProp } from 'react-native';
import { CQImage } from '../AutoImage/CQImage';

interface BpImageProps {
  src: ImageSourcePropType & ImageURISource;
}

const BG_IMAGE: StyleProp<ImageStyle> = { height: '100%', width: '100%', position: 'absolute' };

export const CQBgImage: FC<BpImageProps> = ({ src }) => {
  return <CQImage source={src} resizeMode='stretch' resizeMethod='auto' style={BG_IMAGE} />;
};
