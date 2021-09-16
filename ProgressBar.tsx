import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import Animated, {
    Clock,
    interpolate,
    useCode,
    call
} from 'react-native-reanimated';
import runTiming from './Animation';

interface ProgressBarProps {
    radius?: number;
    strokeWidth?: number;
    color?: string;
    opacity?: number;
    duration?: number;
    progress: number; /* value on a scale of 100 */
    progressFontSize?: number;
    showPercentSymbol?: boolean;
    label?: string;
    labelFontSize?: number;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);

const ProgresBar: React.FC<ProgressBarProps> = ({
    radius = 80,
    strokeWidth = 10,
    color = 'cyan',
    opacity = 0.2,
    duration = 2000,
    showPercentSymbol = false,
    progressFontSize = 40,
    labelFontSize = 20,
    label,
    progress
}) => {
    const [value, _] = useState(progress % 100);
    const viewBoxDimension = 2 * (radius + strokeWidth);
    const circumference = Math.round(2 * Math.PI * radius);
    const inputRef = useRef<TextInput>(null);

    const animate = runTiming({
        clock: new Clock(),
        value: 0,
        dest: 1,
        duration
    });

    const strokeDashoffset = interpolate(animate, {
        inputRange: [0, 1],
        outputRange: [circumference, Math.round(circumference * (1 - (value * 0.01)))],
    });

    const text = interpolate(animate, {
        inputRange: [0, 1],
        outputRange: [0, Math.round(value)]
    });

    useCode(() => [
        call([text], ([text]) => {
            text = Math.round(text);
            inputRef?.current?.setNativeProps({ text: `${text?.toString()}${showPercentSymbol ? '%' : ''}` });
        })
    ], [text]);

    return (
        <View style={{ width: viewBoxDimension, height: viewBoxDimension }}>
            <Svg
                width={viewBoxDimension}
                height={viewBoxDimension}
                viewBox={`0 0 ${viewBoxDimension} ${viewBoxDimension}`}
            >
                <G rotation="-90" origin={`${viewBoxDimension / 2}, ${viewBoxDimension / 2}`}>
                    <Circle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        strokeWidth={strokeWidth}
                        stroke={color}
                        fill="transparent"
                        strokeOpacity={opacity}
                    />
                    <AnimatedCircle
                        cx="50%"
                        cy="50%"
                        r={radius}
                        strokeWidth={strokeWidth}
                        stroke={color}
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                    />
                </G>
            </Svg>
            <View
                style={[
                    StyleSheet.absoluteFillObject,
                    { justifyContent: 'center', alignItems: 'center' }
                ]}
            >
                <AnimatedText
                    ref={inputRef}
                    underlineColorAndroid="transparent"
                    editable={false}
                    defaultValue="0"
                    style={{ fontSize: progressFontSize, color, fontWeight: 'bold' }}
                />
                {label && <Text style={{ color, fontWeight: 'bold', fontSize: labelFontSize }}>{label}</Text>}
            </View>
        </View>
    );
};

export default React.memo(ProgresBar);
