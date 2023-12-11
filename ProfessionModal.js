//ProfessionModal.js

import React, { useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const allProfessions = ["Doctor", "Engineer", "Teacher", "Artist", "Lawyer", "Developer", "Nurse", "Architect"];

const ProfessionModal = ({ visible, onClose, onSearchSelect, currentFilters }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [autocompleteSuggestions, setAutocompleteSuggestions] = useState([]);

  const handleSearch = () => {
    onSearchSelect(searchQuery);
    setSearchQuery('');
    setAutocompleteSuggestions([]);
    onClose();
  };

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredProfessions = allProfessions.filter(profession =>
        profession.toLowerCase().includes(query.toLowerCase()) &&
        !currentFilters.includes(profession)
      );
      setAutocompleteSuggestions(filteredProfessions);
    } else {
      setAutocompleteSuggestions([]);
    }
  };

  const selectAutocompleteItem = (item) => {
    onSearchSelect(item);
    setSearchQuery('');
    const newSuggestions = allProfessions.filter(profession =>
      profession.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !currentFilters.includes(profession) && profession !== item
    );
    setAutocompleteSuggestions(newSuggestions);
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  const onScrollBegin = () => {
    Keyboard.dismiss(); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => selectAutocompleteItem(item)} style={styles.suggestionItem}>
      <View style={styles.suggestionContent}>
        <Icon name="plus" size={18} color="lightblue" />
        <Text style={styles.suggestionText}>{" " + item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Modal
      animationType="slide"
      transparent="false"
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
      
        {/* Modal Header */}

        <View style={styles.modalHeader}>
          <TouchableOpacity onPress={onClose} style={styles.iconButton}>
            <Icon name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Επάγγελμα</Text>
        </View>

        {/* Search Input */}
        <TextInput
          placeholder="Type here to search..."
          placeholderTextColor="grey"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={updateSearchQuery}
          autoFocus={true}
          onSubmitEditing={dismissKeyboard}
        />

        <FlatList
          data={autocompleteSuggestions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.suggestionsList}
          onScrollBeginDrag={onScrollBegin}
          keyboardShouldPersistTaps='handled'
        />
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  modalView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  
  suggestionItem: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  suggestionText: {
    color: 'black',
    marginLeft: 5, 
  },
  suggestionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', 
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  modalTitle: {
    fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 100, 
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginHorizontal: 10,
    marginTop: 10, 
    color: 'black',
    backgroundColor: 'white',
  },
  iconButton: {
    width: 35, 
    height: 35, 
    borderRadius: 17.5, 
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfessionModal;
