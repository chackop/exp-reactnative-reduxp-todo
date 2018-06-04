import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
// import { StackNavigator, } from 'react-navigation';
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

  onAddStarted() {
    console.log('on add started');
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <Text>Add form comes here!</Text>
        );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
          />
        );
    }
  }

  render() {
    return (
      <View>
        <Text>This is a todo app!</Text>
        <Navigator
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav
          })}
          renderScene={this.renderScene.bind(this)}
        />
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
