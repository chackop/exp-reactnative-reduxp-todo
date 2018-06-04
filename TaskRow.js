import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ListView } from 'react-native';

export default class TaskRow extends Component {
  static propTypes = {
    todo: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
            {this.props.todo.task}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    label: {
        fontSize: 20,
        fontWeight: '300',
    }
});