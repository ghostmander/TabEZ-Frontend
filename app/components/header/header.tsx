import React from "react"
import { HeaderProps } from "./header.props"
import { Text } from "../text/text"
import { TextStyle } from "react-native"
import { color, spacing, typography } from "../../theme"
export function Header(props: HeaderProps) {
  const { style, titleStyle, title } = props

  const HEADER_STYLE: TextStyle = {
    color: color.darkTheme.text,
    fontFamily: typography.primary,
    fontWeight: "bold",
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
  const STYLE = style || HEADER_STYLE
  return <Text preset="header" style={[STYLE, titleStyle]} text={title || "Tabs"} />
}
