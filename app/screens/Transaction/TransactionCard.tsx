import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { TRANSACTION_AMOUNT_CONTAINER, TRANSACTION_AMOUNT_VALUE, TRANSACTION_CARD_CONTAINER } from './style';

export const TransactionCard = () => {
  return (
    <View style={TRANSACTION_CARD_CONTAINER}>
      <View style={TRANSACTION_AMOUNT_CONTAINER}>
        <Text style={TRANSACTION_AMOUNT_VALUE}>$ 21.00</Text>
      </View>
    </View>
  );
};
