import { useStores } from 'app/models';
import { box_shadow_md, flex_center } from 'app/styles';
import { palette } from 'app/theme/palette';
import { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { HEADER, HEADER_TITLE, LEVELS_CONTAINER, LEVEL_CONTAINER, MAIN_CONTAINER } from './styles';

export const QuestScreen = () => {
  const {
    authStore: { currentAccount, currentQuest, getQuest },
  } = useStores();

  useEffect(() => {
    getQuest();
  });

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
              <Text style={{ fontSize: 200, color: palette.white }}>{`${currentAccount?.level}`}</Text>
            </View>
          </View>
          <View style={LEVELS_CONTAINER}>
            <View style={{ backgroundColor: palette.deepPink, marginVertical: 10, padding: 10, borderRadius: 10, width: '100%' }}>
              <Text style={HEADER_TITLE}>{currentQuest.name}</Text>
              <Text style={{ fontSize: 16, color: palette.white }}>{currentQuest.objectiveDescription}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 10 }}>
                <View style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, backgroundColor: palette.white, marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 16, color: palette.deepPink, fontWeight: 'bold' }}>{`Points : ${currentQuest.points}`}</Text>
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, backgroundColor: palette.white, marginRight: 10 }}>
                  <Text style={{ fontSize: 16, color: palette.deepPink, fontWeight: 'bold' }}>{`Amount objective : ${currentQuest.amountObjective}`}</Text>
                </View>
                <TouchableOpacity style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, backgroundColor: palette.white, ...box_shadow_md }}>
                  <FontAwesome5 name='flag-checkered' size={17} color={palette.green} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ErrorBoundary>
  );
};
