import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { HomeScreen } from 'app/screens/Home/HomeScreen';
import { QuestScreen } from 'app/screens/Quest/QuestScreen';
import { palette } from 'app/theme/palette';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FrontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from '../components';
import { CalendarScreen, TransactionScreen } from '../screens';
import { colors, spacing, typography } from '../theme';
import { AppStackParamList, AppStackScreenProps } from './AppNavigator';

export type DemoTabParamList = {
  Home: undefined;
  Transaction: undefined;
  Quest: undefined;
  DemoCommunity: undefined;
  Calendar: undefined;
  DemoShowroom: { queryIndex?: string; itemIndex?: string };
  DemoDebug: undefined;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type DemoTabScreenProps<T extends keyof DemoTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<DemoTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<DemoTabParamList>();

export function DemoNavigator() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: palette.deepPink,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <Icon icon='components' color={focused ? colors.tint : undefined} size={30} />,
        }}
      />

      <Tab.Screen
        name='Quest'
        component={QuestScreen}
        options={{
          tabBarLabel: 'Quest',
          tabBarIcon: ({ focused }) => <FrontAwesome name='map-o' color={focused ? colors.tint : undefined} size={30} />,
        }}
      />

      <Tab.Screen
        name='Transaction'
        component={TransactionScreen}
        options={{
          tabBarAccessibilityLabel: 'Transaction',
          tabBarLabel: 'Transaction',
          tabBarIcon: ({ focused }) => <FrontAwesome name='money' color={focused ? colors.tint : undefined} size={30} />,
        }}
      />

      <Tab.Screen
        name='Calendar'
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ focused }) => <FrontAwesome name='calendar' color={focused ? colors.tint : undefined} size={30} />,
        }}
      />
    </Tab.Navigator>
  );
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
};

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
};

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
};
