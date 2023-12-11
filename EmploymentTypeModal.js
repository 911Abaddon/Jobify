// EmploymentTypeModal.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const EmploymentTypeModal = ({ onClose, onSelection }) => {

  const handleOptionPress = (option) => {
    onSelection(option); // Invoke the callback with the selected option
  };

  return (
    <View style={styles.fullScreenModal}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.EmpTypeModTitle}>Τύπος Απσχόλησης</Text>
      
      {/* Options Wrapper */}
      <View style={styles.optionsWrapper}>
        <View style={styles.EmpTpModSeparator} />
        <TouchableOpacity style={styles.OptEmpTypeCont} onPress={() => handleOptionPress('Αδιαφορο')}>
          <Text style={styles.OptEmpTypeTxt}>Αδιαφορο</Text>
        </TouchableOpacity>
        <View style={styles.EmpTpModSeparator} />
        <TouchableOpacity style={styles.OptEmpTypeCont} onPress={() => handleOptionPress('Μερική Απασχόληση')}>
          <Text style={styles.OptEmpTypeTxt}>Μερική Απασχόληση</Text>
        </TouchableOpacity>
        <View style={styles.EmpTpModSeparator} />
        <TouchableOpacity style={styles.OptEmpTypeCont} onPress={() => handleOptionPress('Πλήρης Απασχόληση')}>
          <Text style={styles.OptEmpTypeTxt}>Πλήρης Απασχόληση</Text>
        </TouchableOpacity>
        <View style={styles.EmpTpModSeparator} />
        <TouchableOpacity style={styles.OptEmpTypeCont} onPress={() => handleOptionPress('Πρακτική άσκηση')}>
          <Text style={styles.OptEmpTypeTxt}>Πρακτική άσκηση</Text>
        </TouchableOpacity>
        <View style={styles.EmpTpModSeparator} />
        <TouchableOpacity style={styles.OptEmpTypeCont} onPress={() => handleOptionPress('Ελεύθερος Επαγγελματίας')}>
          <Text style={styles.OptEmpTypeTxt}>Ελεύθερος Επαγγελματίας</Text>
        </TouchableOpacity>
        <View style={styles.EmpTpModSeparator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenModal: {
    flex: 1,
    paddingTop: 20, // Adjust the padding as needed
    backgroundColor: 'white',
    justifyContent: 'center', // This will center the options wrapper vertically
  },
  optionsWrapper: {
    marginHorizontal: 20, // Add horizontal margin if needed
  },
  OptEmpTypeCont: {
    paddingVertical: 15, // Adjust the padding as needed
    paddingHorizontal: 20,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  OptEmpTypeTxt: {
    fontSize: 18,
    color: '#000',
  },
  EmpTpModSeparator: {
    height: 1,
    backgroundColor: '#E0E0E0', // A light gray color for the separator line
    marginVertical: 8, // Add vertical margin for spacing between options
  },
  closeButton: {
    position: 'absolute',
    top: 60, // Adjust the position as needed
    left: 20,
    zIndex: 10,
    backgroundColor: '#D3D3D3', // A light gray color for the circle background
    borderRadius: 20, // Makes the button shape circular
    width: 40, // Set the width of the circle
    height: 40, // Set the height of the circle
    justifyContent: 'center', // Center the "X" vertically within the circle
    alignItems: 'center', // Center the "X" horizontally within the circle
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  EmpTypeModTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute', // Position the title absolutely to keep it at the top
    top: 65, // Adjust based on status bar height and design preference
    alignSelf: 'center', // Center the title horizontally
    zIndex: 1,
    left:90,
  },
  // ... other styles
});

export default EmploymentTypeModal;
