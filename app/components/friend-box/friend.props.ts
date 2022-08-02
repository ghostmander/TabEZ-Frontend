import { StyleProp, TextStyle, ViewStyle } from "react-native"

export interface HeaderProps {
  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>

  /**
   * Title style overrides.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * Checkbox fill style overrides.
   */
  fillStyle?: StyleProp<ViewStyle>

  /**
   * Input style overrides.
   */
  inputStyle?: StyleProp<TextStyle>

  /**
   * Text to display next to checkbox.
   */
  text?: string

  /**
   * Enable/disable the checkbox.
   */
  enabled?: boolean
}
