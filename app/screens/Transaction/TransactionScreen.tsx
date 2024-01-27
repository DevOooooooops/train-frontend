import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { ErrorBoundary } from '../ErrorScreen/ErrorBoundary';
import { CONTAINER, HEADER, SCROLL_VIEW, TITLE } from './style';
import { TransactionCard } from './TransactionCard';
import { CQBgImage } from 'app/components/BgImage';
import { CQText } from 'app/components/Text/CQText';
import { useStores } from 'app/models';

const transactionBg = require('assets/images/transaction-bg.png');

export const TransactionScreen: FC = () => {
  const { transactionStore } = useStores();

  return (
    <ErrorBoundary catchErrors='always'>
      <CQBgImage src={transactionBg} />
      <View style={HEADER}>
        <CQText text='Transactions' style={TITLE} />
      </View>
      <View style={CONTAINER}>
        <ScrollView style={SCROLL_VIEW}>
          {[1, 2, 3, 4, 5, 6, 7].map((_e, k) => (
            <TransactionCard key={k} />
          ))}
        </ScrollView>
      </View>
    </ErrorBoundary>
  );
};
