import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ListView, TouchableHighlight, Switch } from 'react-native';
import TaskRow from "./TaskRow";

class TaskList extends React.Component {
    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        })

        this.state = {
            dataSource: ds.cloneWithRows(props.todos)
        };
    }

    componentWillReceiveProps(nextProps) {
        const dataSOurce = this.state.dataSource.cloneWithRows(nextProps.todos);
        this.setState({dataSource});
    }

    renderRow(todo) {
        return (
            <TaskRow todo={todo} 
                onDone={this.props.onDone}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toggleRow}>
                    <Switch
                        onValueChange={this.props.onToggle}
                        style={styles.toggleRow}
                        value={this.props.filter !== 'pending'}
                    />
                    <Text style={styles.toggleText}>
                        Showing {this.props.todos.length} {this.props.filter} todo(s) 
                    </Text> 
                </View>
                <Text>This is the List View</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />

                <TouchableHighlight 
                    style={styles.button}
                    onPress={this.props.onAddStarted}
                >
                    <Text style={styles.buttonText}>
                        Add One
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

TaskList.propTypes = {
    filter: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddStarted: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F7F7F7',
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    },
    toggleRow: {
        flexDirection: 'row',
        padding: 10,
    },
    toggleText: {
        fontSize: 20,
        padding: 10,
    }
});

export default TaskList;
