import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, KeyboardAvoidingView, Platform }

from 'react-native';
const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText }]);
      setInputText('');
    }
  };

  const renderMessageItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Text>{item.text}</Text>
    </View>
  );

  
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={item => item.id}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#eee'
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 10,
    borderRadius: 20
  },
  messageItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});


export default ChatScreen;


