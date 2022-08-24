import React from "react"
import { HeaderProps } from "./friend.props"
import { TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
import { Checkbox } from "../checkbox/checkbox"
import { TextInput } from "react-native-gesture-handler"
export function FriendBox(props: HeaderProps) {
  const { style, textStyle, fillStyle, text } = props
  const [on, toggle] = React.useState(false)
  const [amount, setAmount] = React.useState("")

  const CONTAINER: ViewStyle = {
    flexDirection: "row",
    // alignSelf: "flex-start",
    justifyContent: "space-between",
    paddingVertical: spacing[1],
    paddingLeft: spacing[2],
    width: "100%",
  }
  const FILL_STYLE: ViewStyle = {
    backgroundColor: color.darkTheme.button,
    height: 32,
    width: 32,
    borderRadius: 8,
    borderWidth: 0,
  }
  const TEXT_STYLE: TextStyle = {
    fontFamily: typography.primary,
    fontSize: 30,
    width: "20%",
    borderBottomWidth: 1,
    borderBottomColor: color.darkTheme.amountUnderline,
    color: color.darkTheme.text,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 30,
    top: -5,
  }

  return (
    <View style={style || CONTAINER}>
      <Checkbox
        value={on}
        onToggle={toggle}
        fillStyle={fillStyle || FILL_STYLE}
        outlineStyle={{
          marginTop: -2,
          backgroundColor: color.darkTheme.checkboxDisabled,
          height: 32,
          width: 32,
          borderRadius: 8,
          borderWidth: 0,
        }}
        textStyle={[{ paddingLeft: spacing[2], fontSize: 30 }, textStyle]}
        text={text || "USE PROP"}
      />
      <TextInput
        style={textStyle || TEXT_STYLE}
        onChangeText={(text) => {
          toggle(true)
          setAmount(text)
        }}
        value={amount}
        autoCapitalize="none"
        keyboardType="numeric"
        maxLength={5}
      />
    </View>
  )
}
