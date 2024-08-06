
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView, FlatList, ScrollView, FlatListComponent } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {

    const [modelIsVisible, setModelIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState<{text: string, key: string}[]>([]);


    function startAddGoalHandler() {
        setModelIsVisible(true);
    }

    function endAddGoalHandler() {
        setModelIsVisible(false);
    }

    function addGoalHandler(enteredGoalText: string) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, key: Math.random().toString() },
        ]);

        endAddGoalHandler(); 
    }

    function deleteGoalHandler(id: string) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.key !== id);
        });
    }


    return (
        <View style={styles.appContainer}>
            <Button title="Add New Goal" color={'#a065ec'} onPress={startAddGoalHandler} />
            {modelIsVisible && <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>}
            <View style={styles.goalsContainer}>
                <Text>List of goals ...</Text>
                <FlatList alwaysBounceVertical={false} data={courseGoals}
                renderItem={(itemData) => {
                    return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteItem={deleteGoalHandler} />;
                }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 70,
        paddingHorizontal: 16,
        flex: 1,
    },
    goalsContainer: {
        flex: 4,
    },
});


const CustomAppBar = ({
    title='App Bar',
    iconColor = 'white',
    backgroundColor = 'transparent',
    actions = [],
    style = {},
    leading = null,
  }) => {
    return (
      <SafeAreaView style={[stylesAppBar.container, { backgroundColor }]}>
        {leading ? (
          <TouchableOpacity style={stylesAppBar.leading}>
            {leading}
          </TouchableOpacity>
        ) : (
          <Icon name="menu" size={24} color={iconColor} />
        )}
        <Text style={[stylesAppBar.title, style]}>{title}</Text>
        <View style={stylesAppBar.actionsContainer}>
          {actions && actions.map((action, index) => (
            <TouchableOpacity key={index}>
              {action}
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  };
  
  const stylesAppBar = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 56, // Typical AppBar height
      paddingHorizontal: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      flex: 1,
    },
    actionsContainer: {
      flexDirection: 'row',
    },
    leading: {
      padding: 8,
    }
  });

function Icon({ name = '', size = 24, color = 'black' }) {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
}