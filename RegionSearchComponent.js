//RegionSearchComponent.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RegionSearchComponent = ({ onSearchSubmit }) => {
  return (
    <View style={styles.regionSearchWrapper}>
      <Text style={styles.label}>Περιοχή</Text>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          
        }}
      >
        <Text style={styles.searchButtonText}>Αναζήτηση</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  regionSearchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchButton: {
    width: 200, 
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    marginLeft: 'auto',
  },
  searchButtonText: {
    color: '#000', 
    fontSize: 20, 
  },
 
});

export default RegionSearchComponent;

