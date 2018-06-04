import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from "./TaskList";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        todos: [
          {
            task: 'Learn react native',
          }
        ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a todo app!</Text>
        <TaskList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
