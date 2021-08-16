import React, {useState} from 'react';
import { Alert, Keyboard, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]); //empty array initially

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    console.log(tasks);
    Keyboard.dismiss();
  }
  
  const deleteTask = (deleteIndex) => {
    //Alert.alert(value);
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  function updatedTask(newName,index) {
    //console.log(tasks[0]);
    tasks[index]= newName;
    setTasks([...tasks]);
  }
  

  const editTask = (index, task) => {
  
      Alert.prompt(
        "Enter edits to task",
        "Current: "+ task,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel"),
            style: "cancel"
          },
          {
            text: "OK",
            onPress: newName => updatedTask(newName, index),
          }
        ],
        
      );
      
    };


    
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem 
                index={index + 1} 
                name={task} 
                deleteTask={() => deleteTask(index)}
                editTask={() => editTask(index, task)}
              />
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 0,
    textAlign: 'center',

  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});