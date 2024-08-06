import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

function GoalInput (props: any) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
                <TextInput
                style={styles.textInput}
                placeholder="Your Course Goal"
                onChangeText={goalInputHandler}
                value={enteredGoalText}
                />
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Submit" onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel}/>
            </View>
            </View>
        </View>
        </Modal>
    );
}


export default GoalInput;



const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        marginRight: 10,
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '50%',
        marginHorizontal: 8,
    }
})