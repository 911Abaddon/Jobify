import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './ProfileScreenStyles';

const CustomCheckbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.customCheckbox}>
      {checked ? (
        <View style={styles.checkedCircle}>
          <Text style={styles.checkmark}>&#10003;</Text>
        </View>
      ) : (
        <View style={styles.uncheckedCircle} />
      )}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
