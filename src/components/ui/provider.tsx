"use client"

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import "../../fontDeclarations.css";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Poppins" },
        nav: { value: "Poppins" },
        body: { value: "DM Sans Variable" },
        btn: { value: "DM Sans Variable" },
      },
      fontSizes: {
        heading: { value: "20pt" },
        nav: { value: "14pt" },
        body: { value: "14pt" },
        post: { value: "12pt" },
        btn: { value: "12pt" },
        subText: { value: "10pt" }
      },
      colors: {
        green1: { value: "#9DED7D" },
        green2: { value: "#80C266" },
        green3: { value: "#64994F" },
        green3Opacity: { value: "#64994F80" },
        green4: { value: "#497239" },
        green5: { value: "#304D24" },
        green6: { value: "#192B12" },
        green7: { value: "#091405" },
        btnFont: { value: "#ffffff" },
        linkFont: { value: "#64994F" },
        fontOpacityLight: { value: "#00000060" },
        fontOpacityDark: { value: "#ffffff60" },
        bgPageLight: { value: "#fff" },
        bgPageDark: { value: "#000" },
        bgModalHeaderLight: {value: "#dfdfdf"},
        lineLight: { value: "#000" },
        lineDark: { value: "#fff" },
        bgNavButtonLightHover: { value: "#00000020" }
      },
      borders: {
        border1Light: { value: "2px solid #000000" },
      }
    },
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
