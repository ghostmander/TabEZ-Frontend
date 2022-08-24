import React, { FC } from "react"
import { View, ViewStyle, TextStyle, TextInput } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, FriendBox, Header, Screen } from "../../components"
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
  height: "100%",
}
const TEXT: TextStyle = {
  color: color.darkTheme.text,
  fontFamily: typography.primary,
  fontSize: 18,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const AMOUNT_TEXTBOX: TextStyle = {
  ...TEXT,
  ...BOLD,
  height: 50,
  width: "80%",
  borderBottomWidth: 1,
  borderBottomColor: color.darkTheme.amountUnderline,
  color: color.darkTheme.text,
  textAlign: "center",
  margin: 20,
}
const BTN_CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  alignItems: "center",
  width: "100%",
  height: "100%",
  // flex: 1,
  flexDirection: "row",
  justifyContent: "space-around",
  alignSelf: "stretch",
  bottom: 0,
}
const BTN: ViewStyle = {
  width: "40%",
  borderRadius: 1000,
  backgroundColor: color.darkTheme.button,
  marginVertical: 30,
}
const BTN_TEXT: TextStyle = {
  ...TEXT,
  textAlign: "center",
  color: color.darkTheme.text,
  width: "100%",
  // fontSize: 40,
}

export const PaymentScreen: FC<StackScreenProps<NavigatorParamList, "payment">> = observer(
  ({ navigation }) => {
    // const nextScreen = () => navigation.navigate("home")
    const home = () => navigation.navigate("home")
    const username = "$USERNAME"
    const [amount, setAmount] = React.useState("")
    const friendList: string[] = ["Tilak", "Aryan", "Aarav", "Utkarsh", "Vandit", "Jatin"]

    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Header titleStyle={{ fontSize: 36 }} title={`${username} is paying`} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <TextInput
            style={AMOUNT_TEXTBOX}
            onChangeText={(text) => setAmount(text)}
            value={amount}
            placeholder="Set Amount"
            placeholderTextColor={color.darkTheme.amountColor}
            autoCapitalize="none"
            keyboardType="numeric"
          />
          {friendList.map((friend) => (
            <FriendBox key={friend} text={friend} />
          ))}

          <Screen style={BTN_CONTAINER} preset="fixed" backgroundColor={color.transparent}>
            <Button onPress={home} style={BTN} textStyle={BTN_TEXT} text="Back" />
            <Button onPress={home} style={BTN} textStyle={BTN_TEXT} text="Confirm" />
          </Screen>
        </Screen>
      </View>
    )
  },
)
