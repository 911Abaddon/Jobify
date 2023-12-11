import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { registerAnimationListener } from './AnimationListeners';

const YourComponent = () => {
  useEffect(() => {
    // Register the animation listener
    const removeListener = registerAnimationListener((value) => {
      // Handle updates to the animated value here
      console.log('Animated value updated:', value);
    });

    // Remove the listener when the component unmounts
    return () => {
      removeListener();
    };
  }, []);

  // Trigger an animation that updates the animated value
  const startAnimation = () => {
    // Your animation logic here
  };

  return (
    <View>
      {/* Your component content */}
      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
};

export default YourComponent;
