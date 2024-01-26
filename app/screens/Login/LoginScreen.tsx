import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { colors, spacing } from "app/theme"
import { CQImage } from "app/components/AutoImage/CQImage"
import { ErrorBoundary } from "app/screens"
import { CQText } from "app/components/Text/CQText"
import { palette } from "app/theme/palette"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {

  return (
    <ErrorBoundary catchErrors='always'>
      <CQImage
        source={require('assets/images/authentication.png')}
        resizeMode='stretch'
        resizeMethod='auto'
        style={{height: '100%', width: '100%', position: 'absolute' }}
      />
      <View style={{ height: 170, width: '100%', alignItems: 'center',justifyContent: 'flex-end'}}>
        <CQText style={{fontSize: 50, color: palette.black, fontWeight: 'bold'}} text={"Sign In"}></CQText>
      </View>
    </ErrorBoundary>
  )
})

const $screenContentContainer: ViewStyle = {
  paddingVertical: spacing.xxl,
  paddingHorizontal: spacing.lg,
}

const $signIn: TextStyle = {
  marginBottom: spacing.sm,
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.lg,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.md,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}
