import { CQBgImage } from 'app/components/BgImage';
import { CQText } from 'app/components/Text/CQText';
import { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { ErrorBoundary } from "app/screens";
import { TransactionCard } from './TransactionCard';
import { CONTAINER, HEADER, SCROLL_VIEW, TITLE } from './style';
import { useStores } from "app/models"

const transactionBg = require('assets/images/transaction-bg.png');

export const TransactionScreen: FC = () => {
  const {authStore} = useStores();
  const {transactions} = authStore;
  return (
    <ErrorBoundary catchErrors='always'>
      <CQBgImage src={transactionBg} />
      <View style={HEADER}>
        <CQText text='Transactions' style={TITLE} />
      </View>
      <View style={CONTAINER}>
        <ScrollView style={SCROLL_VIEW}>
          {transactions.map((_e, k) => (
            <TransactionCard
              transaction={_e}
              key={k}
            />
          ))}
        </ScrollView>
      </View>
    </ErrorBoundary>
  );
};
