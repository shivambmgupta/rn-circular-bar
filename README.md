![Language](https://img.shields.io/badge/language-ES%206-orange.svg)
[![Platforms](https://img.shields.io/badge/platform-iOS%20%7C%20Android-lightgrey.svg)](http://facebook.github.io/react-native/docs/getting-started.html)

# rn-circular-bar

##### A light-weighted react-native module for creating a circular progress bar. This module incorporates animations and has peer dependency on [react-native-reanimated@1.13.3](https://docs.swmansion.com/react-native-reanimated/).

## Install

This component is built with `React Native` and works for Android and iOS.

**Install with [npm](https://www.npmjs.com/):**

```sh
npm i --save rn-circular-bar
```

**Install with [yarn](https://yarnpkg.com):**

```sh
$ yarn add react-native-circle-slider
```

## Usage

**Basic Usage(github file)**

```javascript
import React from "react";
import { StatusBar, View } from 'react-native';
import CircularSlider from "./CircularSlider";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black' }}>
      <StatusBar hidden />
      <CircularSlider />
    </View>
  );
};

export default App;

```

## Properties

| Property name     | Type       | Default       | Description                           |
| ----------------- | ---------- | ------------- | ------------------------------------- |
| **radius**        | _number_   | 80            | The radius of the circle              |
| **strokeWidth**   | _number_   | 10            | The stroke/thickness of the circle    |
| **color**         | _string_   | cyan          | The color of the circle               |
| **opacity**       | _number_   | 0.2           | The opacity of the slider             |
| **duration**      | _number_   | 2000          | The duration in milliseconds          |
| **progress**      | _number_   | -             | The value out of 100.                 |


## Author

Shivam Gupta
