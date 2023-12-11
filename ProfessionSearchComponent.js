//ProfessionSearchComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfessionModal from './ProfessionModal'; // Adjust the import path as needed

const ProfessionSearchComponent = ({ onSearchSubmit }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [filters, setFilters] = useState([]);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const handleSearchSelect = (profession) => {
    if (profession && !filters.includes(profession)) {
      setFilters([profession, ...filters]);
      onSearchSubmit(profession); // Optionally handle the search submission
    }
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter(f => f !== filter));
  };

  const renderFilter = ({ item }) => (
    <TouchableOpacity 
      onPress={() => removeFilter(item)}
      style={styles.filterChip}
      hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
    >
      <Text style={styles.filterText}>{item}</Text>
      <Icon name="times-circle" size={18} color="#333" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Profession Label and Add Button */}
      <View style={styles.searchContainer}>
        <Text style={styles.label}>Επάγγελμα</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={openSearchModal}
        >
          <Text style={styles.addButtonText}>Προσθήκη</Text>
        </TouchableOpacity>
      </View>

      {/* Filters Container */}
      <View style={styles.filtersContainer}>
        <FlatList
          data={filters}
          renderItem={renderFilter}
          keyExtractor={(item, index) => `profession-${index}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalList}
        />
      </View>

      {/* Search Modal */}
      <ProfessionModal 
        visible={showSearchModal} 
        onClose={() => setShowSearchModal(false)} 
        onSearchSelect={handleSearchSelect}
        currentFilters={filters} // Pass the current filters to SearchModal
      />
    </View>
  );
};
// Styles
const styles = StyleSheet.create({
  container: {
    // Add any additional styles for the container if needed
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    width: 200, // Adjust width as needed
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    marginLeft: 'auto',
  },
  addButtonText: {
    color: '#000', // Text color
    fontSize: 20, // Adjust font size as needed
  },
  filtersContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 50, // Adjust this height so that it can contain the filter chips
    // rest of your styles...
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 5,
    marginBottom: 5,
    marginTop:5,
    
  },
  filterText: {
    marginRight: 5,
    fontSize: 17,
  },
  
});

export default ProfessionSearchComponent;
