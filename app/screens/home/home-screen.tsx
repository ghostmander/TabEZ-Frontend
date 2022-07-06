import React, { FC } from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Screen, Text } from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"

const FULL: ViewStyle = {
  flex: 1,
  backgroundColor: color.darkTheme.background,
}
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  alignItems: "center",
  // justifyContent: "space-evenly",
  justifyContent: "center",
  height: "100%",
}
const TEXT: TextStyle = {
  color: color.darkTheme.text,
  fontFamily: typography.primary,
  fontSize: 18,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 48,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  backgroundColor: color.darkTheme.header,
  paddingTop: spacing[8] + spacing[6],
  paddingBottom: spacing[4],
  paddingHorizontal: 0,
  marginHorizontal: 0,
  includeFontPadding: false,
  alignSelf: "stretch",
}
const BTN: ViewStyle = {
  height: 100,
  width: "80%",
  borderRadius: 1000,
  backgroundColor: color.darkTheme.button,
  marginVertical: 30,
}
const BTN_TEXT: TextStyle = {
  ...TEXT,
  textAlign: "center",
  color: color.darkTheme.text,
  fontSize: 40,
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {
    const payment = () => navigation.navigate("payment")
    const tabList = () => navigation.navigate("tabList")
    const clearance = () => navigation.navigate("clearanceRequest")

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Text preset="header" style={HEADER_TITLE} text="Tabs" />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Button onPress={payment} style={BTN} textStyle={BTN_TEXT} text="I'm Paying!!!" />
          <Button onPress={tabList} style={BTN} textStyle={BTN_TEXT} text="My Tabs" />
          <Button onPress={clearance} style={BTN} textStyle={BTN_TEXT} text="Clearance Check" />
        </Screen>
      </View>
    )
  },
)
