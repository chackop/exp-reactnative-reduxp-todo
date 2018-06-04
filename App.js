import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from "./TaskList";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn react native task',
        },
        {
          task: 'Learn Redux task',
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a todo app!</Text>
        <TaskList todos={this.state.todos} />
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
