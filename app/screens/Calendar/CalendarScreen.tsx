import { AppStackScreenProps, navigate } from "app/navigators"
import { ErrorBoundary } from "app/screens"
import React, { FC } from "react"
import { View } from 'react-native';
import { palette } from "app/theme/palette"
import { CQImage } from "app/components/AutoImage/CQImage"
import { CQText } from "app/components/Text/CQText"
import { CalendarProvider, WeekCalendar } from "react-native-calendars"
import { useStores } from "app/models"

interface CalendarScreenProps extends AppStackScreenProps<'Calendar'> {}

export const CalendarScreen: FC<CalendarScreenProps> = _props => {
  const {authStore} = useStores()
  const {transactions} = authStore

  return (
    <ErrorBoundary catchErrors='always'>
      <CalendarProvider date={new Date().toDateString()}>
      <View style={{ height: '100%', width: '100%'}}>
        <CQImage
          source={require('assets/images/sign-up-bg.png')}
          resizeMode='stretch'
          resizeMethod='auto'
          style={{ height: '100%', width: '100%', position: 'absolute' }}
        />
        <View style={{ height: 230, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
          <CQText style={{ fontSize: 40, color: palette.black, fontWeight: 'bold' }} text={'Calendar'} />
        </View>
        <View style={{ width: '100%', height: 150, marginTop: 40}}>
          <WeekCalendar
            initialDate={'2024-01-27'}
            minDate={'2024-01-31'}
            maxDate={'2024-01-01'}
            onDayPress={day => {
              let sumIncome = 0;
              let sumOutcome = 0;
              transactions.forEach(item => {
                const creationDate = new Date(item.creationDatetime ?? new Date()).toISOString().split('T')[0];
                if (creationDate === day.dateString) {
                  if (item.type === 'INCOME') {
                    // @ts-ignore
                    sumIncome += item.amount;
                  } else if (item.type === 'OUTCOME') {
                    // @ts-ignore
                    sumOutcome += item.amount;
                  }
                }
              });
              console.tron.log(sumIncome, sumOutcome)
              navigate('Stat', {"income": sumIncome, "outcome": sumOutcome})
            }}
            monthFormat={'dd/MM'}
            hideArrows={true}
            disableMonthChange={true}
            firstDay={1}
            disableArrowLeft={true}
            disableArrowRight={true}
            enableSwipeMonths={true}
            theme={{
              backgroundColor:'transparent',
              calendarBackground: 'transparent',
              textSectionTitleColor: palette.textClassicColor,
              selectedDayBackgroundColor: palette.white,
              selectedDayTextColor: palette.textClassicColor,
              todayTextColor: palette.white,
              todayBackgroundColor: palette.blue,
              dayTextColor: palette.textClassicColor,
              textDisabledColor: palette.lightGrey,
            }}
          />
        </View>
        <View style={{width: '100%', height: 100, justifyContent: 'center', alignItems: 'center'}}>
          <CQText style={{ fontSize: 24, color: palette.lighterBlack}} text={'Click to track your daily stat'} />
        </View>
      </View>
      </CalendarProvider>
    </ErrorBoundary>
  );
};
