import { List } from 'react-native-paper';
import { CQText } from '../Text/CQText';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { palette } from 'app/theme/palette';
import { LIST, LIST_CONTAINER, LIST_ICON_LEFT_CONTAINER, LIST_ICON_RIGHT_CONTAINER } from './style';
import { FC } from 'react';
import { ListItemProps } from './type';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CQListItem: FC<ListItemProps> = props => {
  const { title, leftIcon, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={LIST_CONTAINER}>
      <List.Item
        style={LIST}
        title={<CQText text={title} />}
        left={() => (
          <View style={LIST_ICON_LEFT_CONTAINER}>
            <AntDesign color={palette.white} size={30} name={leftIcon} />
          </View>
        )}
        right={() => (
          <View style={LIST_ICON_RIGHT_CONTAINER}>
            <AntDesign color={palette.darkBlack} size={20} name='right' />
          </View>
        )}
      />
    </TouchableOpacity>
  );
};
