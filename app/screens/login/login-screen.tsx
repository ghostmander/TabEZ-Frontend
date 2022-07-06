import React, { FC } from "react"
import { View, ViewStyle, TextStyle, TextInput } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text } from "../../components"
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
const TEXTBOX: TextStyle = {
  ...TEXT,
  ...BOLD,
  height: 50,
  width: "80%",
  borderRadius: 100,
  textAlign: "center",
  backgroundColor: color.darkTheme.textBox,
  color: color.darkTheme.text,
  margin: 20,
}
const LOGIN: TextStyle = {
  ...TEXT,
  fontSize: 30,
  paddingTop: "20%",
  paddingBottom: "20%",
}
const LOGIN_BUTTON: ViewStyle = {
  height: 70,
  width: "50%",
  borderRadius: 30,
  backgroundColor: color.darkTheme.textHighlight,
  margin: 20,
  marginTop: 80,
}
const LOGIN_BUTTON_TEXT: TextStyle = {
  ...TEXT,
  textAlign: "center",
  color: color.darkTheme.text,
  fontSize: 40,
}

export const LoginScreen: FC<StackScreenProps<NavigatorParamList, "login">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("home")

    const [usernameValue, setUsernameValue] = React.useState("")
    const [passwordValue, setPasswordValue] = React.useState("")
    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Header />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={LOGIN} text="Login" />
          <TextInput
            style={TEXTBOX}
            onChangeText={(text) => setUsernameValue(text)}
            value={usernameValue}
            placeholder="Username"
            placeholderTextColor={color.darkTheme.textBoxPlaceholder}
            autoCapitalize="none"
          />
          <TextInput
            style={TEXTBOX}
            onChangeText={(text) => setPasswordValue(text)}
            value={passwordValue}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={color.darkTheme.textBoxPlaceholder}
            autoCapitalize="none"
          />
          <Button
            onPress={() => {
              if (usernameValue === "admin" && passwordValue === "admin") {
                setUsernameValue("")
                setPasswordValue("")
                nextScreen()
              } else alert("Invalid username or password")
            }}
            style={LOGIN_BUTTON}
            textStyle={LOGIN_BUTTON_TEXT}
            text="Login"
          />
        </Screen>
      </View>
    )
  },
)
