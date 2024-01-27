import { CQImage } from 'app/components/AutoImage/CQImage';
import { CQListItem } from 'app/components/ListItem/CQListItem';
import { CQText } from 'app/components/Text/CQText';
import { useStores } from 'app/models';
import { AppStackScreenProps } from 'app/navigators';
import { FC } from 'react';
import { View } from 'react-native';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { BACKGROUND_IMAGE, PROFILE_PICTURE, PROFILE_PICTURE_CONTAINER, USERNAME } from './styles';

const bgImageSource = require('assets/images/profile-bg.png');
const logoImageSource = require('assets/images/cash-quest-logo.png');

interface ProfileScreenProps extends AppStackScreenProps<'Profile'> {}

export const ProfileScreen: FC<ProfileScreenProps> = _props => {
  const {
    authStore: { currentUser, logout },
  } = useStores();

  return (
    <ErrorBoundary catchErrors='always'>
      <CQImage source={bgImageSource} resizeMode='stretch' resizeMethod='auto' style={BACKGROUND_IMAGE} />
      <View style={{ position: 'relative' }}>
        <View style={PROFILE_PICTURE_CONTAINER}>
          <CQImage source={logoImageSource} resizeMode='contain' resizeMethod='auto' style={PROFILE_PICTURE} />
        </View>
        <CQText text={currentUser?.username || ''} style={USERNAME} />
        <CQListItem leftIcon='user' title='Edit profile' />
        <CQListItem leftIcon='setting' title='Preferences' />
        <CQListItem leftIcon='question' title='Help' />
        <CQListItem leftIcon='logout' title='Logout' onPress={logout} />
      </View>
    </ErrorBoundary>
  );
};
