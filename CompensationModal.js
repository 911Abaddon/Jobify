//CompensationModal.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, SafeAreaView, TextInput, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CompensationModal = ({ onClose, onConfirm, initialCompensation }) => {
    const [amount, setAmount] = useState(initialCompensation.amount || '');
    const [compensationType, setCompensationType] = useState(initialCompensation.type);
    const [isInvalidInput, setIsInvalidInput] = useState(false);

    const handleConfirm = () => {
        if (compensationType === 'Αδιάφορο') {
            onConfirm('Αδιάφορο');
        } else {
            if (amount.trim() === '') {
                setIsInvalidInput(true);
                Keyboard.dismiss();
                return;
            }
            onConfirm(`${amount} ευρώ ${compensationType}`);

        }
        onClose();
    };
    

    const handleInputChange = (text) => {
        setAmount(text);
        if (isInvalidInput) setIsInvalidInput(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            onRequestClose={onClose}
        >
            <SafeAreaView style={styles.safeArea}>
                {/* Modal Header */}
                <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Αμοιβή</Text>
                </View>

                {/* Modal Content */}
                <View style={styles.modalContent}>
                    <TextInput 
                        style={[styles.input, isInvalidInput && styles.invalidInput]}
                        onChangeText={handleInputChange}
                        value={amount}
                        keyboardType="numeric"
                        placeholder="Enter amount"
                        returnKeyType="done"
                        onSubmitEditing={Keyboard.dismiss}
                    />
                    <Picker
                        selectedValue={compensationType}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setCompensationType(itemValue)
                        }>
                        <Picker.Item label="Αδιάφορο" value="Αδιάφορο" />
                        <Picker.Item label="ανά ώρα" value="ανά ώρα" />
                        <Picker.Item label="ανα μήνα" value="ανα μήνα" />
                        <Picker.Item label="ανα εργασία" value="ανα εργασία" />
                    </Picker>
                </View>

                {/* Modal Footer */}
                <View style={styles.modalFooter}>
                    <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
                        <Text>Επιβεβαίωση</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    modalHeader: {
        width: '100%',
        padding: 10,
        flexDirection: 'row', // Align items in a row
        alignItems: 'center', // Align items vertically
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 100, // Add some space between the button and the title
        // Other styling as needed
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:20,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: 'lightblue',
        borderWidth: 1,
        marginBottom: 0,
        marginTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    modalContent: {
        flex: 1,
        paddingHorizontal: 20,
    },
    modalFooter: {
        padding: 20,
        alignItems: 'center',
    },
    confirmButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 300,
        
    },
    picker: {
        height: 50,
        marginTop: 0,
        width: '100%',
    },
    invalidInput: {
        borderColor: 'red',
    },
});

export default CompensationModal;