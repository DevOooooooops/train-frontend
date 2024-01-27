import { ScrollView } from 'react-native-gesture-handler';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { View } from 'react-native';

export const QuestList = () => {
  return (
    <ErrorBoundary catchErrors='always'>
      <ScrollView>
        <View></View>
      </ScrollView>
    </ErrorBoundary>
  );
};
