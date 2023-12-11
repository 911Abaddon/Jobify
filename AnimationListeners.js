import { Animated } from 'react-native';

const animatedValue = new Animated.Value(0);

const registerAnimationListener = (callback) => {
  const listener = animatedValue.addListener((state) => {
    callback(state.value); // Pass the animated value to the callback
  });

  return () => {
    animatedValue.removeListener(listener);
  };
};

export { registerAnimationListener };
