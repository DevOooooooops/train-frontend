import { CQBgImage } from 'app/components/BgImage';
import { CQText } from 'app/components/Text/CQText';
import { TransactionType } from 'app/models/entities/transaction/transaction';
import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { TransactionCard } from './TransactionCard';
import { CONTAINER, HEADER, SCROLL_VIEW, TITLE } from './style';

const transactionBg = require('assets/images/transaction-bg.png');

export const TransactionScreen: FC = () => {
  return (
    <ErrorBoundary catchErrors='always'>
      <CQBgImage src={transactionBg} />
      <View style={HEADER}>
        <CQText text='Transactions' style={TITLE} />
      </View>
      <View style={CONTAINER}>
        <ScrollView style={SCROLL_VIEW}>
          {[1, 2, 3, 4, 5, 6, 7].map((_e, k) => (
            <TransactionCard
              transaction={{
                amount: 100,
                creationDateTime: '2024-03-01',
                id: 'id',
                reason: 'Buy something essentials to my life',
                type: k % 2 === 0 ? TransactionType.INCOME : TransactionType.OUTCOME,
              }}
              key={k}
            />
          ))}
        </ScrollView>
      </View>
    </ErrorBoundary>
  );
};
