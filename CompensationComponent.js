// CompensationComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import CompensationModal from './CompensationModal'; 

const CompensationComponent = () => {
    const [compensationModalVisible, setCompensationModalVisible] = useState(false);
    const [selectedCompensation, setSelectedCompensation] = useState({ type: 'Αδιάφορο', color: 'gray' });
    const [compensation, setCompensation] = useState({ type: 'Αδιάφορο', amount: '' });
    const handleCompensationSettingPress = () => {
        setCompensationModalVisible(true);
    };

    const handleCompensationConfirm = (compensationText) => {
        setSelectedCompensation({
            type: compensationText,
            color: compensationText === 'Αδιάφορο' ? 'gray' : 'blue'
        });
        setCompensationModalVisible(false);
    };
    
    return (
        <View style={styles.compensationContainer}>
            <View style={styles.compensationTypeContainer}>
                <Text style={styles.compensationTypeLabel}>Αμοιβή</Text>
                <Text style={[styles.indifferentLabel, { color: selectedCompensation.color }]}>
                    {selectedCompensation.type}
                </Text>
            </View>
            <TouchableOpacity onPress={handleCompensationSettingPress} style={styles.settingButton}>
                <Text style={styles.settingButtonText}>Ορισμός</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={false}
                visible={compensationModalVisible}
                onRequestClose={() => setCompensationModalVisible(!compensationModalVisible)}
            >
               <CompensationModal 
                    onClose={() => setCompensationModalVisible(false)} 
                    onConfirm={handleCompensationConfirm}
                    initialCompensation={compensation}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    compensationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    compensationTypeContainer: {
      
    },
    compensationTypeLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        alignSelf: 'flex-start',
        marginBottom: 15,
    },
    indifferentLabel: {
        fontSize: 20,
        color: 'gray',
        marginRight: 15,
    },
    settingButton: {
        width: 150, 
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        marginLeft: 'auto',
        marginTop:-35,
    },
    settingButtonText: {
        fontSize: 20,
        color: '#333',
    },
    
});

export default CompensationComponent;