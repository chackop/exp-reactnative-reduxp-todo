import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { Navigator } from "react-native-deprecated-custom-component"; // to remove
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import store from './todoStore';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   todos: [
    //     {
    //       task: 'Learn react native task',
    //     },
    //     {
    //       task: 'Learn Redux task',
    //     }
    //   ]
    // };
    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  onAddStarted() {
    console.log('on add started');
    this.nav.push({
      name: 'taskform'
    });
  }

  onAdd(task) {
    console.log('as task is added', task);
    // this.state.todos.push({
    //   task: this.task,
    // });
    // this.setState({ todos });
    store.dispatch({
      type: 'ADD_TODO',
      task,
    });
    this.nav.pop();
  }

  onDone(todo) {
    console.log('task was completed', todo.task);
    // const filteredTodos = this.state.todos.filter((filteredTodo) => {
    //   return filteredTodo !== todo;
    // });
    // this.setState({ todos: filteredTodos });
    store.dispatch({
      type: 'DONE_TODO',
      todo,
    })
  }

  onCancel() {
    console.log('cancelled');
    this.nav.pop();
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
              onAdd={this.onAdd.bind(this)}       
              onCancel={this.onCancel.bind(this)}
          />
        );
      default:
        return (
          <TaskList
            onAddStarted={this.onAddStarted.bind(this)}
            todos={this.state.todos}
            onDone={this.onDone.bind(this)}
          />
        );
    }
  }

  render() {
    return (
      <View>
        <Text>This is a todo app!</Text>
        {/* <Navigator
          initialRoute={{ name: 'tasklist', index: 0 }}
          ref={((nav) => {
            this.nav = nav
          })}
          renderScene={this.renderScene.bind(this)}
        /> */}
        <TaskForm />        
        {/* <RootStack /> */}
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

const RootStack = createStackNavigator(
  {
    Home: TaskList,
    // Form: TaskForm,
  },
  {
    initialRouteName: 'Home',
  }
);
