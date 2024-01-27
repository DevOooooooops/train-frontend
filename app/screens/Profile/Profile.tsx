import { CQImage } from 'app/components/AutoImage/CQImage';
import { AppStackScreenProps } from 'app/navigators';
import { FC } from 'react';
import { View } from 'react-native';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { BACKGROUND_IMAGE, PROFILE_PICTURE, PROFILE_PICTURE_CONTAINER } from './styles';

const bgImageSource = require('assets/images/profile-bg.png');
const logoImageSource = require('assets/images/cash-quest-logo.png');

interface ProfileScreenProps extends AppStackScreenProps<'Profile'> {}

export const ProfileScreen: FC<ProfileScreenProps> = function ProfileScreen(_props) {
  return (
    <ErrorBoundary catchErrors='always'>
      <CQImage source={bgImageSource} resizeMode='stretch' resizeMethod='auto' style={BACKGROUND_IMAGE} />
      <View style={PROFILE_PICTURE_CONTAINER}>
        <CQImage source={logoImageSource} resizeMode='contain' resizeMethod='auto' style={PROFILE_PICTURE} />
      </View>
    </ErrorBoundary>
  );
};
