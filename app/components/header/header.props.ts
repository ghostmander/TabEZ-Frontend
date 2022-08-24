import { StyleProp, TextStyle, ViewStyle } from "react-native"

export interface HeaderProps {
  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>

  /**
   * Title text.
   */
  title?: string

  /**
   * Header TX
   */
  headerTx?: string
}
