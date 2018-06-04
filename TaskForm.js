import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
    onCancel: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 50,
        backgroundColor: '#F7F7F7'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        margin: 10,
        padding: 10,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
    },
    button: {
        height: 45,
        backgroundColor: '#05A5D1',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButton: {
        backgroundColor: '#666'
    },
});

class TaskForm extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            task: '',
        }
    }

    onChange(text) {
        this.task = text;
    }

    onAddPressed() {
        this.props.onAdd(this.task);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    onChangeText={this.onChange.bind(this)}
                />
                <TouchableHighlight 
                    style={styles.button}
                    onPress={this.props.onAddPressed}
                >
                    <Text style={styles.buttonText}>
                        Add Task
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    style={[styles.button, styles.cancelButton]}
                    onPress={this.props.onCancel}
                >
                    <Text style={styles.buttonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


TaskForm.propTypes = propTypes;


export default TaskForm;
