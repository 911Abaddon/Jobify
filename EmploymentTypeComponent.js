// EmploymentTypeComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import EmploymentTypeModal from './EmploymentTypeModal'; // Adjust the path as necessary

const EmploymentTypeComponent = ({ initialEmploymentType }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEmploymentType, setSelectedEmploymentType] = useState(initialEmploymentType);

    const handleSelectionPress = () => {
        setModalVisible(true);
    };

    const handleEmploymentTypeSelection = (type) => {
        setSelectedEmploymentType({
            type: type,
            color: type === 'Αδιαφορο' ? 'gray' : 'blue'
        });
        setModalVisible(false);
    };

    return (
        <View>
            <View style={styles.employmentTypeRow}>
                <View style={styles.employmentTypeContainer}>
                    <Text style={styles.employmentTypeLabel}>Τύπος Απασχόλησης</Text>
                    <Text style={[styles.indifferentLabel, { color: selectedEmploymentType.color }]}>
                        {selectedEmploymentType.type}
                    </Text>
                </View>
                
                <TouchableOpacity onPress={handleSelectionPress} style={styles.selectionButton}>
                    <Text style={styles.selectionButtonText}>Επιλογή</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <EmploymentTypeModal onClose={() => setModalVisible(false)} onSelection={handleEmploymentTypeSelection} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    employmentTypeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    employmentTypeContainer: {
        // Add any specific styles for this container
    },
    employmentTypeLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'flex-start',
        marginBottom: 15,
        // Add more styling as needed
    },
    indifferentLabel: {
        fontSize: 20,
        color: 'gray', // Light gray color for the text
        marginRight: 15,
    },
    selectionButton: {
        width: 150, // Adjust width as needed
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        marginLeft: 'auto',
        marginTop:-35,
    },
    selectionButtonText: {
        fontSize: 20,
        color: '#333',
        // Other text styling
    },
});

export default EmploymentTypeComponent;
