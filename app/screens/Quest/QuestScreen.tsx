import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { HEADER, HEADER_TITLE, LEVELS_CONTAINER, LEVEL_BOX, LEVEL_BOX_DISABLED, LEVEL_CONTAINER, MAIN_CONTAINER } from './styles';
import { palette } from 'app/theme/palette';
import { flex_center } from 'app/styles';

export const QuestScreen = () => {
  return (
    <ErrorBoundary catchErrors='always'>
      <ScrollView style={MAIN_CONTAINER}>
        <View>
          <View style={LEVEL_CONTAINER}>
            <View style={HEADER}>
              <Text style={HEADER_TITLE}>Cash Quest</Text>
              <View style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, backgroundColor: palette.white }}>
                <Text style={{ fontSize: 16, color: palette.deepPink, fontWeight: 'bold' }}>level</Text>
              </View>
              <IonIcon name='notifications-outline' color={palette.white} size={30} />
            </View>
            <View style={{ ...(flex_center as any), width: '100%', height: '90%' }}>
              <Text style={{ fontSize: 200, color: palette.white }}>01</Text>
            </View>
          </View>
          <View style={LEVELS_CONTAINER}>
            {[1, 2, 3, 4, 5, 5, 6, 6, 7].map((_e, index) =>
              index > 1 ? (
                <View key={index} style={LEVEL_BOX_DISABLED}>
                  <IonIcon name='lock-closed-outline' size={30} color={palette.white} />
                </View>
              ) : (
                <TouchableOpacity key={index} style={LEVEL_BOX}>
                  <Text style={HEADER_TITLE}>{index + 1}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      </ScrollView>
    </ErrorBoundary>
  );
};
