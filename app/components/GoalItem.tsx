import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem (this: any, props: any) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{ color: '#210644' }}
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
              <Text style={styles.textGoal} >{props.text}</Text>
            </Pressable>
        </View>
    );
}


export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 5,
        fontSize: 20,
        borderColor: '#000000',
        backgroundColor: '#5816B4',
        borderWidth: 2,
    },
    pressedItem: {
        opacity: 0.5
    },
    textGoal: {
        color: 'white',
        padding: 8,
    }
})