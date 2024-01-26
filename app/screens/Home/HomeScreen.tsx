import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { AppStackScreenProps } from "app/navigators"
import { ErrorBoundary } from "app/screens"
import { View } from "react-native"

interface HomeScreenProps extends AppStackScreenProps<"Home"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen(_props) {
  return (
    <ErrorBoundary catchErrors="always">
      <View></View>
    </ErrorBoundary>
  )
})
