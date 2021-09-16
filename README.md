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

## Sample
<img src="https://media.giphy.com/media/Ymxf8UmgmKhPZKSn8a/giphy.gif?cid=790b7611e94c0c2f1b1a4befb5e4ada1a8bce72c8bfa474a&rid=giphy.gif&ct=g" />


## Usage

**Basic Usage(github file)**

```javascript
import React from 'react';
import { StatusBar, View } from 'react-native';
import ProgressBar from 'rn-circular-bar';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black'
  }
});

const App = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar hidden />
      <ProgressBar 
        progress={35}
        label={'Downloaded'}
        showPercentSymbol={true}
        progressFontSize={30}
        labelFontSize={15}
      />
    </View>
  );
};

export default App;

```

## Properties

| Property name        | Type       | Default       | Description                           |
| -----------------    | ---------- | ------------- | ------------------------------------- |
| **radius**           | _number_   | 80            | The radius of the circle              |
| **strokeWidth**      | _number_   | 10            | The stroke/thickness of the circle    |
| **color**            | _string_   | cyan          | The color of the circle               |
| **opacity**          | _number_   | 0.2           | The opacity of the slider             |
| **duration**         | _number_   | 2000          | The duration in milliseconds          |
| **progress**         | _number_   | -             | The value out of 100.                 |
| **progresFontSize**  | _number_   | 40            | The font size of the progress         |
| **label**            | _string_   | -             | The lable along with the progress     |
| **labelFontSize**    | _number_   | 20            | The font size of the label            |
| **showPercentSymbol**| _boolean_  | false         | To show the % symbol                  |

## Note
This dependency takes the *modulo of 100*. Let's assume the user has passed 135 as progress, the output will be 35. 

_Progress_: This is the value on a scale of 100. If the entity has a value of 50 out of 100, the value of progress should be 33. 

## Author

Shivam Gupta
