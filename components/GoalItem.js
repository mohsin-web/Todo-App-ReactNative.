import { StyleSheet, View, Text, Pressable } from 'react-native';
function GoalItem(props) {
    return (
        <Pressable android_ripple={{ color: 'red' }} onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.presseditem}>

            <View style={styles.goalitems}>
                <Text style={styles.goaltext}>{props.text}</Text>
            </View>
        </Pressable>

    );
}
export default GoalItem;

const styles = StyleSheet.create({
    goalitems: {
        margin: 8,

        backgroundColor: '#5e0acc',
        color: 'white',
        borderRadius: 10,
    },
    presseditem: {
        opacity: 0.5

    },
    goaltext: {
        color: 'white',
        padding: 8
    },
});