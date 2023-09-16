import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
function GoalInput(props) {
    const [EnteredGoalText, setEnteredGoalText] = useState('');
    function inputtexthandler(enteredtext) {
        setEnteredGoalText(enteredtext);
    }

    function goalslisthandler() {
        props.onAddGoals(EnteredGoalText)
        setEnteredGoalText('');

    }
    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputcontainer}>
                <Image style={styles.image} source={require('../assets/images/logo4.png')} />
                <TextInput style={styles.inputext}
                    placeholder='enter details here'
                    onChangeText={inputtexthandler}
                    value={EnteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.Button}>
                        <Button title='SUBMIT' color="#b180f0" onPress={goalslisthandler} />
                    </View>
                    <View style={styles.Button}>
                        <Button title='Cancel' color="#f31282" onPress={props.onCancel} />
                    </View>
                </View>


            </View>
        </Modal>
    )
}
export default GoalInput;
const styles = StyleSheet.create({
    inputcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        backgroundColor: '#311b6b'
    },
    inputext: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 15,
        color: '#120438',
        borderRadius: 6
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
    },
    Button: {
        width: 100,
        marginHorizontal: 8

    },
    image: {
        width: 260,
        height: 260,
        marginBottom: 30,
        borderWidth: 10,
        borderRadius: 70,
        borderColor: "black"

    }
})