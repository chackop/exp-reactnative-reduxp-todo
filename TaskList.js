import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TaskList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});

export default TaskList;
