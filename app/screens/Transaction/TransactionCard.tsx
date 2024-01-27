import { View } from 'react-native';
import { Text } from 'react-native-paper';
import {
  TRANSACTION_AMOUNT_CONTAINER,
  TRANSACTION_AMOUNT_STATUS_CONTAINER,
  TRANSACTION_AMOUNT_VALUE,
  TRANSACTION_CARD_CONTAINER,
  TRANSACTION_INFO_CONTAINER,
  TRANSACTION_INFO_DATE,
  TRANSACTION_INFO_REASON,
} from './style';
import { FC } from 'react';
import { TransactionCardProps } from './type';
import { textCutter } from 'app/utils/text-cutter';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TransactionType } from 'app/models/entities/transaction/transaction';
import { palette } from 'app/theme/palette';

export const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  const { amount, creationDateTime, reason, type } = transaction;
  return (
    <View style={TRANSACTION_CARD_CONTAINER}>
      <View style={TRANSACTION_AMOUNT_CONTAINER}>
        <Text style={TRANSACTION_AMOUNT_VALUE}>{`$ ${amount}`}</Text>
      </View>
      <View style={TRANSACTION_INFO_CONTAINER}>
        <Text style={TRANSACTION_INFO_DATE}>{new Date(creationDateTime || '').toUTCString().slice(0, 17)}</Text>
        <Text style={TRANSACTION_INFO_REASON}>{textCutter(reason || '')}</Text>
      </View>
      <View style={TRANSACTION_AMOUNT_STATUS_CONTAINER}>
        {type === TransactionType.INCOME ? (
          <AntDesign name='arrowup' color={palette.green} size={30} />
        ) : (
          <AntDesign name='arrowdown' color={palette.pastelRed} size={30} />
        )}
      </View>
    </View>
  );
};
