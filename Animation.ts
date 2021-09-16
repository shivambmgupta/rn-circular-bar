import Animated, {
  Value,
  Easing,
  block,
  cond,
  not,
  clockRunning,
  startClock,
  timing,
  stopClock,
  set
} from 'react-native-reanimated';

interface TimingParams {
  clock: Animated.Clock;
  value: Animated.Adaptable<number>;
  dest: Animated.Adaptable<number>;
  duration: Animated.Adaptable<number>;
}

interface TimingConfig {
  toValue: Animated.Value<0>;
  duration: Animated.Adaptable<number>;
  easing: Animated.EasingFunction;
  useNativeDriver: boolean;
}

const runTiming = (params: TimingParams) => {
  const {clock, value, dest, duration} = params;
  const state: Animated.TimingState = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config: TimingConfig = {
    toValue: new Value(0),
    duration,
    easing: Easing.inOut(Easing.ease),
    useNativeDriver: false
  };

  return block([
    cond(not(clockRunning(clock)), [
      set(config.toValue, dest),
      set(state.frameTime, 0),
    ]),
    block([
        cond(not(clockRunning(clock)), [
          set(state.finished, 0),
          set(state.time, 0),
          set(state.position, value),
          startClock(clock),
        ]),
        timing(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position
      ])
  ]);
};

export default runTiming;
