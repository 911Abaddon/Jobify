//SearchScreen.js
import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Modal
} from 'react-native';
import ProfessionSearchComponent from './ProfessionSearchComponent';
import RegionSearchComponent from './RegionSearchComponent';
import CompensationModal from './CompensationModal';
import EmploymentTypeComponent from './EmploymentTypeComponent';
import CompensationComponent from './CompensationComponent';


const SearchScreen = () => {
  


  const [compensationModalVisible, setCompensationModalVisible] = useState(false);
  const [compensation, setCompensation] = useState('Αδιάφορο'); 

  const handleProfessionSearch = (profession) => {
    console.log('Search for profession:', profession);
  };

  const handleRegionSearch = (region) => {
    console.log('Search for region:', region);
  };

  

  
  
  

  
  const handleCompensationConfirm = (compensationText) => {
    setCompensation(compensationText); // Update the compensation state with the selected text
    setCompensationModalVisible(false); // Close the modal
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          {/* Filters Title and Underline */}
          <View style={styles.filtersHeader}>
            <Text style={styles.filtersTitle}>Filters</Text>
            <View style={styles.underline} />
          </View>
  
          {/* Profession Search Component */}
          <ProfessionSearchComponent onSearchSubmit={handleProfessionSearch} />
          <View style={styles.underline} />
  
          {/* Region Search Component */}
          <RegionSearchComponent onSearchSubmit={handleRegionSearch} />
          <View style={styles.underline} />
  
          {/* Employment Type Component */}
          <EmploymentTypeComponent initialEmploymentType={{ type: 'Αδιαφορο', color: 'gray' }} />
          <View style={styles.underline} />
  
          {/* Compensation Component */}
          <CompensationComponent />
          <View style={styles.underline} />
          {/* Rest of your screen's content */}
          {/* ... additional components or content can go here ... */}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
  
};

// ... styles ...


// Styles for the SearchScreen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  underline: {
    height: 1,
    backgroundColor: '#CDCDCD',
    width: '100%',
    marginBottom: 0, // Adjust as needed for consistent spacing
  },
  filtersHeader: {
    alignItems: 'center',
    marginTop: 10, // Adjust the margin as needed
  },
  filtersTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8, // Space between title and underline
  },
  
  
  
  
  indifferentLabel: {
    fontSize: 20,
    color: 'gray', // Light gray color for the text
    marginRight: 15,
  },
  
  selectionButtonText: {
    fontSize: 20,
    color: '#333',
    // Other text styling
  },
  compensationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  compensationLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:10
    // Add more styling as needed
  },
  settingButton: {
    width: 150, // Adjust width as needed
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    marginLeft: 'auto',
    marginBottom:0,
    marginTop:-35,
  },
  settingButtonText: {
    fontSize: 20,
    color: '#333',
    // Other text styling
  },
});


export default SearchScreen;
