import React from "react"
import { Stack, Text, Link, FontWeights } from "@fluentui/react"
import "./index.css"
import Layout from "../components/layout"

const boldStyle = { root: { fontWeight: FontWeights.semibold } }

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        verticalFill
        styles={{
          root: {
            width: "960px",
            margin: "0 auto",
            textAlign: "center",
            color: "#605e5c",
          },
        }}
        className="App"
        gap={15}
      >
        <Text variant="xxLarge" styles={boldStyle}>
          Home
        </Text>
        <Link href="about">about</Link>
        <Link href="playground">playground</Link>
        {/* <img
        src="https://raw.githubusercontent.com/Microsoft/just/master/packages/just-stack-uifabric/template/src/components/fabric.png"
        alt="logo"
      />
      <Text variant="xxLarge" styles={boldStyle}>
        Welcome to Your UI Fabric App
      </Text>
      <Text variant="large">
        For a guide on how to customize this project, check out the UI Fabric
        documentation.
      </Text>
      <Text variant="large" styles={boldStyle}>
        Essential Links
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
        <Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">
          Stack Overflow
        </Link>
        <Link href="https://github.com/officeDev/@fluentui/react/">
          Github
        </Link>
        <Link href="https://twitter.com/officeuifabric">Twitter</Link>
      </Stack>
      <Text variant="large" styles={boldStyle}>
        Design System
      </Text>
      <Stack horizontal gap={15} horizontalAlign="center">
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
          Icons
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">
          Typography
        </Link>
        <Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">
          Theme
        </Link>
      </Stack> */}
      </Stack>
    </Layout>
  )
}

export default App
